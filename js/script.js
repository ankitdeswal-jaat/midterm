/*!
 * Professor-provided Bootstrap color mode toggler
 */
(() => {
    'use strict';

    const storedTheme = localStorage.getItem('theme');

    const getPreferredTheme = () => {
        if (storedTheme) return storedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = function (theme) {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme);
        }
    };

    setTheme(getPreferredTheme());

    const showActiveTheme = (theme, focus = false) => {
        document.querySelectorAll('[data-bs-theme-value]').forEach((el) => {
            el.classList.remove('active');
            el.setAttribute('aria-pressed', 'false');
        });
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
        if (btnToActive) {
            btnToActive.classList.add('active');
            btnToActive.setAttribute('aria-pressed', 'true');
        }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (storedTheme !== 'light' || storedTheme !== 'dark') setTheme(getPreferredTheme());
    });

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme());
        document.querySelectorAll('[data-bs-theme-value]').forEach((toggle) => {
            toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value');
                localStorage.setItem('theme', theme);
                setTheme(theme);
                showActiveTheme(theme, true);
            });
        });
    });

    // Factorial calculator function
    window.calculateFactorial = () => {
        const num = parseInt(document.getElementById('numberInput').value);
        const outputDiv = document.getElementById('output');

        if (isNaN(num) || num < 0) {
            outputDiv.textContent = 'Please enter a non-negative integer!';
            return;
        }

        let factorial = 1;
        for (let i = 1; i <= num; i++) factorial *= i;

        outputDiv.textContent = `${num}! = ${factorial}`;
    };
})();
