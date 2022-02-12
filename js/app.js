// dropdown manu=========================================================
const mobile_menu_icon = document.querySelector(".mobile_menu_icon")
const nav = document.querySelector(".nav")

    mobile_menu_icon.addEventListener("click", function(){
        nav.classList.toggle("active__nav")
        nav.classList.toggle("animate__fadeIn")
        mobile_menu_icon.classList.toggle("uil-times")
    })

// Benefits===============================================================
const demo_details_card = document.querySelectorAll(".demo_details_card")
   
    demo_details_card.forEach(v => {
        v.addEventListener("click", function(){
            demo_details_card.forEach(v =>{
                v.classList.remove("demo_details_card_active")
            })
            v.classList.add("demo_details_card_active")
        })
        
    })

// FAQ=========================================================================
const faq_wrapper = document.querySelectorAll(".faq_wrapper")

    faq_wrapper.forEach(v => {
        v.addEventListener("click", function(){
            faq_wrapper.forEach(v =>{
                v.classList.remove("faq_active")
            })
            v.classList.add("faq_active")
        })
        
    })