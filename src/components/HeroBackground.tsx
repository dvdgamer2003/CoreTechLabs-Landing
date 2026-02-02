"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [framesLoaded, setFramesLoaded] = useState(0);
    const totalFrames = 81;

    useEffect(() => {
        // Preload images
        const loadedImages: HTMLImageElement[] = [];
        let loadCount = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            // Pad with leading zeros: frame_0001.webp
            const indexStr = i.toString().padStart(4, '0');
            // We know the naming convention from the user assets
            // However, the timestamps in filenames vary (e.g. frame_0001_0.00s.webp)
            // Since we can't easily guess the timestamp in the URL without a manifest,
            // and Next.js public folder serving requires exact paths.
            // Wait, the file list showed names like "frame_0001_0.00s.webp".
            // I need to use the EXACT filenames.
            // Since I can't fetch the directory list in the browser easily without an API route,
            // I will assume the user has renamed them or I need to create a map.
            // IMPROVEMENT: I should create a client-side map or just rename them to frame_0001.webp in a separate step?
            // No, I can't rename in strict execution without user permission if not planned.
            // Actually, the user said "Assume frames are sequentially named (e.g. frame_0001.webp)".
            // BUT my `ls` showed "frame_0001_0.00s.webp".
            // I should probably rename them for sanity, OR generate a list. 
            // Renaming is safer and cleaner. I will rename them in the next step BEFORE this component works.

            img.src = `/assets/frames/frame_${indexStr}.webp`;
            img.onload = () => {
                loadCount++;
                setFramesLoaded(loadCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useEffect(() => {
        if (framesLoaded < totalFrames || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let currentFrame = 0;

        const render = () => {
            const img = images[currentFrame];

            // Draw image using 'contain' logic to ensure full visibility (no cropping/breaking)
            // matching the user's request for "framed end frame"
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                // Canvas is wider than image (e.g. Desktop vs 4:3 image, or Mobile Landscape)
                // Fit Height, center horizontally
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                // Canvas is taller than image (e.g. Mobile Portrait vs 16:9 image)
                // Fit Width, center vertically
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

            // Play once and stop at last frame
            if (currentFrame < totalFrames - 1) {
                currentFrame++;
                // Slower animation (50ms = 20fps)
                setTimeout(() => {
                    animationFrameId = requestAnimationFrame(render);
                }, 50);
            } else {
                // Dispatch event when animation finishes
                window.dispatchEvent(new Event("hero-complete"));
            }
        };

        const handleResize = () => {
            if (canvas) {
                const dpr = window.devicePixelRatio || 1;
                // Set actual size in memory (scaled to account for extra pixel density)
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;

                // Set visible size in CSS pixels
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                // Optional: Scale context if we were drawing shapes, but for drawImage 
                // we just fill the larger canvas so no ctx.scale needed here 
                // as our logic uses canvas.width/height natively.
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [framesLoaded, images]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
    );
}
