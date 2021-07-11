import "./src/assets/styles/style.scss"

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___initialLoader").style.display = "none"
    }, 1500)
}