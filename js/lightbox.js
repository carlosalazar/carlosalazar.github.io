/**
 * Lightbox para ampliar las imágenes de invitación.
 * Iguala el ancho de la segunda figura al de la primera en escritorio.
 */
(function () {
    'use strict';

    const BREAKPOINT_DESKTOP = 769;

    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox__content');
    const lightboxImg = document.querySelector('.lightbox__img');
    const closeBtn = document.querySelector('.lightbox__close');
    const backdrop = document.querySelector('.lightbox__backdrop');
    const triggerImages = document.querySelectorAll('.invitation-figure__img');
    const figurePrimary = document.querySelector('.invitation-figure:not(.invitation-figure--secondary)');
    const figureSecondary = document.querySelector('.invitation-figure--secondary');

    if (!lightbox || !lightboxContent || !lightboxImg) {
        return;
    }

    /**
     * En escritorio, asigna a la segunda figura el mismo ancho que la primera.
     */
    function matchSecondaryFigureWidth() {
        if (!figurePrimary || !figureSecondary) {
            return;
        }
        if (window.innerWidth < BREAKPOINT_DESKTOP) {
            figureSecondary.style.removeProperty('--figure-width');
            return;
        }
        const width = figurePrimary.offsetWidth;
        figureSecondary.style.setProperty('--figure-width', width + 'px');
    }

    if (figurePrimary && figureSecondary) {
        matchSecondaryFigureWidth();
        window.addEventListener('resize', matchSecondaryFigureWidth);
    }

    function openLightbox(event) {
        const img = event.currentTarget;
        if (img && img.src) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Invitación ampliada';
        }
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        resetZoom();
    }

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        resetZoom();
    }

    function resetZoom() {
        lightboxContent.classList.remove('is-zoomed');
    }

    function toggleZoom(event) {
        event.preventDefault();
        event.stopPropagation();
        lightboxContent.classList.toggle('is-zoomed');
        if (lightboxContent.classList.contains('is-zoomed')) {
            lightboxContent.scrollTop = 0;
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    }

    triggerImages.forEach(function (img) {
        img.addEventListener('click', openLightbox);
    });
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    lightboxContent.addEventListener('click', toggleZoom);
    lightboxImg.addEventListener('click', toggleZoom);
    document.addEventListener('keydown', handleKeydown);
})();
