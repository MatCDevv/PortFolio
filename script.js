
/* Transformer / Transition Texte (++) */

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = ' ' /*'!<>-_\\/[]{}—=+*^?#________'*/
      this.update = this.update.bind(this)
    }
    setText(newText) {
      var oldText = this.el.innerText
      var length = Math.max(oldText.length, newText.length)
      var promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        var from = oldText[i] || ''
        var to = newText[i] || ''
        var start = Math.floor(Math.random() * 40)
        var end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  
  var phrases = [
    'Bienvenue sur mon PortFolio',
    'Welcome to my PortFolio'
  ]
  
  
  var el = document.querySelector('.word-text')
  var fx = new TextScramble(el)
  
  let counter = 0
  var next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2400)
    })
    counter = (counter + 1) % phrases.length
  };
  
  next()
      
  /* Transformer / Transition Texte (++) */
   
  /* Header Swap (Bandeau)*/
   
  const headerEl = document.querySelector ('.headerindex');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      headerEl.classList.add('headerindex-scrolled');
    } else if (window.scrollY <= 500) {
      headerEl.classList.remove('headerindex-scrolled');
    } if (window.scrollY > 1000) {
      headerEl.classList.remove('headerindex-scrolled');
    }
  });

  const headerLogo = document.querySelector ('.logoheader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      headerLogo.classList.add('logoheader-scrolled');
    } else if (window.scrollY <= 500) {
      headerLogo.classList.remove('logoheader-scrolled');
    }  if (window.scrollY > 1000) {
      headerLogo.classList.remove('logoheader-scrolled');
    }
  });

  /* Header Swap (Bandeau)*/



/* For Library */


AOS.init();

