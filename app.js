const options = document.querySelectorAll('.option')

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(optionInto => {
            optionInto.classList.remove('active')
        })
        option.classList.add('active')
    })
})