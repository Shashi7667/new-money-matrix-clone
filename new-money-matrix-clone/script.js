window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.fade-in');

    blocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleRatio = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

        if (visibleRatio > 0.1) {
            block.classList.add('active');
        }

        const line = document.querySelector(`.number-line[data-index="${index + 1}"]`);
        if (line) {
            const heightPercent = Math.min(visibleRatio * 100, 100); // max 100%
            line.style.height = `${heightPercent}%`;
        }
    });
});
