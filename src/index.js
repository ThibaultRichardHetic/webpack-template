import './css/style.styl'

console.log('Hello webpack')

// hot reload
if(module.hot)
{
    module.hot.accept()

    module.hot.dispose(() =>
    {
        console.log('dispose')
        document.body.removeChild($image)
    })
}