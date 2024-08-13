fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )

fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const dogImgElement = document.querySelector("#dog")
            dogImgElement.src = convertedData.image
        }
    )

// // Define an asynchronous function
// const getTheDog = async () => {
//     // Request the data and wait for the data to come back over the Web
//     const response = await fetch("https://random.dog/woof.json")

//     // Parse the received JSON string into an Object
//     const dogJSONConvertedToObject = await response.json()

//     // Target the HTML image element
//     const dogImgElement = document.querySelector("#dog")

//     // Update the `src` with a URL. The browser will request that image.
//     dogImgElement.src = dogJSONConvertedToObject.url
// }