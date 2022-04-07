$(document).ready(() => {
    $(document).scroll(()=> {
        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height())
    })
})