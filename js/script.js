"use strict"

const searchSection = document.querySelector('.search-page');
const searchButton = searchSection.querySelector('.button-open');
const searchForm = searchSection.querySelector('.search-page__form');

function openSearch() {
    searchSection.classList.toggle('_search-open');
}

document.addEventListener("click", function(e) {
    if (e.target.closest('.button-open')) {
        openSearch();
    }
    if (!e.target.closest('.button-open') && !e.target.closest('.search-page__form') && searchSection.classList.contains('_search-open')) {
        openSearch();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === 'Escape' && searchSection.classList.contains('_search-open')) {
        openSearch();
    }
})

const inputSearch = searchSection.querySelector('.input');
const txtInputLimit = inputSearch.getAttribute('maxlength');
const txtCounter = searchSection.querySelector('.counter span');
txtCounter.innerHTML = txtInputLimit;

inputSearch.addEventListener("keyup", txtSetCounter)

function txtSetCounter () {
    const txtCounterResult = txtInputLimit - inputSearch.value.length;
    txtCounter.innerHTML = txtCounterResult;
}

