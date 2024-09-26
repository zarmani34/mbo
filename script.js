gsap.registerPlugin(ScrollTrigger);

        const text = "Just as you weave words into beautiful stories, you've woven your way into my heart. Your creativity, intelligence, and passion for literature make you truly one-of-a-kind. Here's to another chapter in your life, filled with love, laughter, and countless books. Happy birthday, my dear writer and book lover!";
        let i = 0;
        const speed = 50;

        function typeWriter() {
            if (i < text.length) {
                document.getElementById("typewriter").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
                
                // Bloom the flower
                let progress = i / text.length;
                gsap.to(".petal", {scale: progress, opacity: progress, duration: 0.1});
            }
        }

        function createConfetti() {
            const confettiContainer = document.querySelector('.confetti-container');
            for (let i = 0; i < 50; i++) {
                let confetti = document.createElement('div');
                confetti.className = 'confetti';
                confettiContainer.appendChild(confetti);

                gsap.set(confetti, {
                    x: Math.random() * window.innerWidth,
                    y: -20,
                    backgroundColor: gsap.utils.random(['#d4a373', '#faedcd', '#fefae0', '#e9edc9'])
                });

                gsap.to(confetti, {
                    y: window.innerHeight + 20,
                    x: '+=' + (Math.random() * 200 - 100),
                    rotation: Math.random() * 360,
                    duration: Math.random() * 2 + 1,
                    opacity: 0,
                    onComplete: () => confetti.remove()
                });
            }
        }

        function toggleStory() {
            const storyContent = document.querySelector('.story-content');
            gsap.to(storyContent, {
                duration: 0.5,
                height: storyContent.style.display === 'none' ? 'auto' : 0,
                opacity: storyContent.style.display === 'none' ? 1 : 0,
                onComplete: () => {
                    storyContent.style.display = storyContent.style.display === 'none' ? 'block' : 'none';
                }
            });
        }

        window.onload = function() {
            gsap.from("h1", {duration: 1, y: -50, opacity: 0, ease: "back.out(1.7)"});
            gsap.from(".profile-picture", {duration: 1, scale: 0, opacity: 0, ease: "elastic.out(1, 0.3)", delay: 0.5});
            gsap.from(".book", {
                scrollTrigger: {
                    trigger: ".book",
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                },
                duration: 1, 
                x: -100, 
                opacity: 0, 
                ease: "back.out(1.7)"
            });
            gsap.from(".writing-section", {
                scrollTrigger: {
                    trigger: ".writing-section",
                    start: "top bottom",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                },
                duration: 1, 
                x: 100, 
                opacity: 0, 
                ease: "back.out(1.7)", 
                onComplete: typeWriter
            });
            
            createConfetti();
            setInterval(createConfetti, 5000);  // Repeat confetti every 5 seconds
        };