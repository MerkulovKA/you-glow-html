const MIN_DESKTOP_WIDTH = 1200;

document.addEventListener('DOMContentLoaded', () => {

    initHeader()
    initDesktopMenu()
    initMobileMenu()


    initComponentMainBanner()
    initComponentComparison()
    initComponentCertificates()
    initComponentFAQ()
    initComponentReviews()
    initComponentEquipments()
    initComponentTextMedia()
    initComponentPromotions()
    initComponentComplexPack()
    initComponentSlider()
    initTooltips()
    Fancybox.bind('[data-fancybox]', {});


})


function initHeader() {
    const header = document.getElementById('main-header')
    if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
        document.body.style.marginTop = header.offsetHeight + 'px'
        header.classList.add('header--fixed')

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                header.classList.add('header--scrolled')
            } else {
                header.classList.remove('header--scrolled')
            }
        })
    }

}
function initDesktopMenu() {
    const btn = document.getElementById('desktop-menu-button')
    const menu = document.getElementById('desktop-menu')
    const header = document.getElementById('main-header')
    const paranja = document.getElementById('shadow-for-menu')
    let isOpen = false
    if (btn && menu) {
        paranja.addEventListener('click', () => {
            closeMenu()
        })
        btn.addEventListener('click', () => {
            if (isOpen) {
                closeMenu()
            } else {
                openMenu()
            }
        })
    }

    function closeMenu() {
        btn.classList.remove('open')
        menu.classList.remove('open')
        paranja.classList.remove('open')
        document.body.style.overflow = ''
        isOpen = false
        window.removeEventListener('resize', checkWidth)
    }

    function openMenu() {
        btn.classList.add('open')
        menu.classList.add('open')
        paranja.classList.add('open')
        menu.style.top = `${header.offsetHeight + header.getBoundingClientRect().top}px`
        menu.style.maxHeight = `${window.innerHeight - header.offsetHeight - header.getBoundingClientRect().top}px`
        document.body.style.overflow = 'hidden'
        isOpen = true
        window.addEventListener('resize', checkWidth)
    }

    function checkWidth() {
        if (window.innerWidth < MIN_DESKTOP_WIDTH) {
            closeMenu()
        }
    }

}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-button')
    const menu = document.getElementById('mobile-menu')
    const header = document.getElementById('main-header')
    let isOpen = false
    if (btn && menu) {
        btn.addEventListener('click', () => {
            if (isOpen) {
                closeMenu()
            } else {
                openMenu()
            }
        })
    }

    function openMenu() {
        menu.classList.add('open')
        btn.classList.add('open')
        menu.style.top = `${header.offsetHeight + header.getBoundingClientRect().top}px`
        menu.style.height = `${window.innerHeight - header.offsetHeight}px`
        menu.style.maxHeight = '100svh'
        document.body.style.overflow = 'hidden'
        isOpen = true
        window.addEventListener('resize', checkWidth)
    }

    function closeMenu() {
        menu.classList.remove('open')
        btn.classList.remove('open')
        document.body.style.overflow = ''
        isOpen = false
        window.removeEventListener('resize', checkWidth)
    }

    function checkWidth() {
        if (window.innerWidth >= MIN_DESKTOP_WIDTH) {
            closeMenu()
        }
    }
}

function initComponentMainBanner() {
    const componentMainBanner = document.querySelectorAll('.component-main-banner')
    componentMainBanner.forEach(banner => {
        const swiperElement = banner.querySelector('.component-main-banner__swiper')
        const nextEl = banner.querySelector('.component-main-banner__navigation--next')
        const prevEl = banner.querySelector('.component-main-banner__navigation--prev')
        const pagination = banner.querySelector('.component-main-banner__swiper-pagination')
        const swiper = new Swiper(swiperElement, {
            slidesPerView: 1,
            navigation: {
                nextEl,
                prevEl,
            },
            pagination: {
                el: pagination,
            }
        })
    })

}

function initComponentCertificates() {
    const licences = document.querySelectorAll('.component-certificates')
    licences.forEach(licence => {
            Fancybox.bind("[data-fancybox='licences']", {});
            const swiperElement = licence.querySelector('.swiper')
            const nextEl = licence.querySelector('.component-certificates__navigation--next')
            const prevEl = licence.querySelector('.component-certificates__navigation--prev')
            const swiper = new Swiper(swiperElement, {
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                },
                navigation: {
                    nextEl,
                    prevEl,
                }
            })
        }
    )
}

function initComponentFAQ() {
    const faqs = document.querySelectorAll('.component-faq')
    faqs.forEach(faq => {
        new Accordion(faq, {
            duration: 1000,
            activeClass: 'component-faq__card--active',
            multiple: false,
            openInInit: 0
        })
    })
}

function initComponentReviews() {
    const reviews = document.querySelectorAll('.component-reviews')
    reviews.forEach(review => {
        const nextEl = review.querySelector('.component-reviews__navigation--next')
        const prevEl = review.querySelector('.component-reviews__navigation--prev')
        const pagination = review.querySelector('.swiper-pagination')
        Fancybox.bind("[data-fancybox='client-review']", {});
        const swiperElement = review.querySelector('.swiper')
        const swiper = new Swiper(swiperElement, {
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            },
            navigation: {
                nextEl,
                prevEl,
            },
            pagination: {
                el: pagination,
                dynamicBullets: true,
            }
        })
    })
}

function initComponentEquipments() {
    const equipments = document.querySelectorAll('.component-equipments')
    equipments.forEach(equipment => {
        const nextEl = equipment.querySelector('.component-equipments__navigation--next')
        const prevEl = equipment.querySelector('.component-equipments__navigation--prev')
        const swiperElement = equipment.querySelector('.swiper')

        const subSwiperElements = equipment.querySelectorAll('.component-equipments__card-slider')
        subSwiperElements.forEach(subSwiperElement => {
            const subSwiper = subSwiperElement.querySelector('.swiper')
            const subNextEl = subSwiperElement.querySelector('.component-equipments__card-slider-navigation--next')
            const subPrevEl = subSwiperElement.querySelector('.component-equipments__card-slider-navigation--prev')
            new Swiper(subSwiper, {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: subSwiperElement.querySelector('.swiper-pagination'),
                },
                navigation: {
                    nextEl: subNextEl,
                    prevEl: subPrevEl,
                }
            })
        })
        const swiper = new Swiper(swiperElement, {
            navigation: {
                nextEl,
                prevEl,
            }
        })
    })
}

function initComponentComparison() {
    const sliders = document.querySelectorAll('.component-comparison--interactive')
    sliders.forEach(slider => {
        const sliderContainers = slider.querySelectorAll('.component-comparison__slider')
        sliderContainers.forEach(sliderContainer => {
            const beforeSlide = sliderContainer.querySelector('.component-comparison__slide--before')
            const afterSlide = sliderContainer.querySelector('.component-comparison__slide--after')
            const range = document.createElement('input')
            range.type = 'range'
            range.min = 0
            range.max = 100
            range.value = 50
            range.classList.add('component-comparison__range')
            sliderContainer.appendChild(range)

            const sliderThumb = document.createElement('div')
            sliderThumb.classList.add('component-comparison__slider-thumb')
            sliderContainer.appendChild(sliderThumb)
            afterSlide.querySelector('img').style.width = sliderContainer.offsetWidth + 'px'
            beforeSlide.querySelector('.component-comparison__slide-title').style.left = sliderContainer.offsetWidth / 4 + 'px'
            afterSlide.querySelector('.component-comparison__slide-title').style.right = sliderContainer.offsetWidth / 4 + 'px'

            range.addEventListener('input', () => {
                afterSlide.style.width = `${100 - range.value}%`
                sliderThumb.style.left = `${range.value}%`
                sliderContainer.style.setProperty('--value', range.value)
            })
        })

    })
}

function initComponentTextMedia() {
    const components = document.querySelectorAll('.component-text-media')
    components.forEach(component => {
        const sliders = component.querySelectorAll('.component-text-media__slider')
        sliders.forEach(slider => {
            const prevEl = slider.querySelector('.component-text-media__slider-navigation--prev')
            const nextEl = slider.querySelector('.component-text-media__slider-navigation--next')
            const paginationEl = slider.querySelector('.component-text-media__slider-pagination')
            const swiper = new Swiper(slider, {
                navigation: {
                    nextEl,
                    prevEl,
                },
                pagination: {
                    el: paginationEl,
                }
            })
        })

        const tables = component.querySelectorAll('table')
        tables.forEach(table => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('table-wrapper')
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        })
    })

}

function initComponentPromotions() {
    const components = document.querySelectorAll('.component-promotions__modal-form')
    components.forEach(component => {
        const button = component.querySelector('button')
        button.addEventListener('click', () => {
            component.classList.add('component-promotions__modal-form--success')
        })
    })
}

function initComponentComplexPack() {
    const components = document.querySelectorAll('.component-complex-pack')
    components.forEach(component => {
        const slider = component.querySelector('.swiper')
        const pagination = component.querySelector('.component-complex-pack__slider-pagination')
        const prevEl = component.querySelector('.component-complex-pack__slider-navigation--prev')
        const nextEl = component.querySelector('.component-complex-pack__slider-navigation--next')
        new Swiper(slider, {
            speed: 1000,
            navigation: {
                nextEl,
                prevEl,
            },
            pagination: {
                el: pagination,
                type: 'fraction'
            }
        })
    })
}


function initComponentSlider() {
    const components = document.querySelectorAll('.component-slider')
    components.forEach(component => {
        const sliderEl = component.querySelector('.swiper')
        const pagination = component.querySelector('.swiper-pagination')
        const prevEl = component.querySelector('.component-slider__navigation--prev')
        const nextEl = component.querySelector('.component-slider__navigation--next')
        const paginationEl = component.querySelector('.component-slider__pagination')
        new Swiper(sliderEl, {
            navigation: {
                nextEl,
                prevEl,
            },
            pagination: {
                el: paginationEl,
            }
        })
    })
}

function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]')
    tooltips.forEach(tooltip => {
        const tooltipEl = document.createElement('div')
        tooltipEl.classList.add('tooltip')
        if (tooltip.dataset.tooltipTitle) {
            tooltipEl.innerHTML += `
                <div class="tooltip__title">${tooltip.dataset.tooltipTitle}</div>
            `
        }
        if (tooltip.dataset.tooltipText) {
            tooltipEl.innerHTML += `
                <div class="tooltip__text">${tooltip.dataset.tooltipText}</div>
            `
        }

        tooltipEl.style.top = tooltip.offsetTop + tooltip.offsetHeight + 'px'
        tooltipEl.style.left = tooltip.offsetLeft + 'px'

        tooltip.addEventListener('mouseenter', () => {
            document.body.appendChild(tooltipEl)
        })
        tooltip.addEventListener('mouseleave', () => {
            document.body.removeChild(tooltipEl)
        })
    })
}