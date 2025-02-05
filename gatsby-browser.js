require("typeface-archivo-black")
require("typeface-yeseva-one")
require("typeface-roboto")
require("typeface-bungee-shade")

// export const onClientEntry = () => {
//     if (typeof window.IntersectionObserver === `undefined`) {
//       import(`intersection-observer`)
//       console.log(`# IntersectionObserver is polyfilled!`)
//     }
//   }

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
