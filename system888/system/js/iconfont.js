;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.368 10.3936c-144.1536 0-252.9024 114.6624-252.9024 266.752l0 93.7472-8.192 0c-75.776 0-137.4464 63.3088-137.4464 141.0816l0 360.5248c0 77.7728 61.6704 141.1072 137.4464 141.1072l524.3392 0c75.776 0 137.4464-63.3344 137.4464-141.1072L923.0592 511.9744c0-77.7728-61.6704-141.0816-137.4464-141.0816l-4.5056 0c-1.2032-0.4352-2.4576-0.5632-3.712-0.768l0-93.0048C777.4464 125.0816 667.8016 10.3936 522.368 10.3936L522.368 10.3936zM522.368 52.224c123.52 0 213.248 94.592 213.248 224.9472l0 92.3648L311.3216 369.536l0-92.3648C311.3216 146.816 400.0768 52.224 522.368 52.224L522.368 52.224zM881.28 511.9744l0 360.5248c0 54.7328-42.9312 99.2768-95.616 99.2768L261.2992 971.776c-52.736 0-95.616-44.544-95.616-99.2768L165.6832 511.9744c0-54.7072 42.88-99.2512 95.616-99.2512l50.0224 0 0-1.3824 424.2688 0 0 1.3824 50.048 0C838.3488 412.7488 881.28 457.2672 881.28 511.9744L881.28 511.9744zM881.28 511.9744"  ></path>' +
    '' +
    '<path d="M518.8608 568.0384c-33.5104 0-60.672 28.0064-60.672 62.5664 0 23.1168 12.2368 43.3408 30.336 54.1696l0 102.1952c0 17.2544 13.568 31.3088 30.336 31.3088 16.7424 0 30.336-14.0544 30.336-31.3088L549.1968 684.8c18.0992-10.8288 30.3104-31.0272 30.3104-54.1696C579.456 596.0704 552.32 568.0384 518.8608 568.0384L518.8608 568.0384zM518.8608 568.0384"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghuming" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1008.9312 963.184c-20.6912-72.7008-52.264-140.7968-98.344-202.4496-60.7616-81.296-139.6592-139.7968-240.8304-169.9728-0.8096-0.2416-1.528-0.7584-2.648-1.3296 2.9232-1.568 5.3872-2.8816 7.8432-4.208 117.9104-63.6512 183.632-187.6784 164.28-316.72-8.8672-59.1264-33.7216-111.8352-74.7488-157.2752C709.1488 49.9472 639.0672 13.6768 554.5312 2.704c-8.2448-1.0704-16.536-1.8112-24.8064-2.704-12.032 0-24.064 0-36.0976 0-1.4544 0.2688-2.9008 0.5984-4.3664 0.7968-16.3424 2.2096-32.9136 3.4272-48.9984 6.7456C271.4736 42.3552 153.2992 198.0768 186.3312 368.9616c18.6608 96.5424 75.3248 168.8256 165.1168 217.9008 1.4912 0.816 3.0016 1.6032 5.1104 2.728-1.8944 0.6432-2.9904 0.9808-4.0592 1.3856-21.1952 8.0304-42.9808 14.9136-63.4752 24.312-75.336 34.5504-134.4576 86.856-181.3632 151.8704-48.8656 67.7312-80.8496 142.3904-100.264 222.0576C4.6064 1000.6672 2.4784 1012.264 0 1024c341.4896 0 682.1264 0 1024 0C1018.9296 1003.3792 1014.6016 983.1104 1008.9312 963.184zM240.9504 312.768c0.1488-141.368 121.4-255.9232 270.8176-255.864 149.4464 0.0592 270.616 114.6928 270.6352 256.0368 0.0192 141.344-121.1296 256.0144-270.5664 256.096C362.2064 569.12 240.8016 454.2656 240.9504 312.768zM90.1488 967.1152c1.8208-10.6448 3.2416-21.08 5.424-31.3696 12.9488-61.0736 37.6832-117.3632 77.4544-167.2784 52.1728-65.48 121.4048-106.7104 204.8032-127.3136 52.7936-13.0416 106.5744-16.824 160.9488-14.6128 49.1648 1.9984 97.2608 9.4832 143.6016 25.5056 97.7744 33.8064 167.1392 96.7712 211.2512 185.2912 19.9168 39.9664 32.9392 81.9264 38.7648 125.8224 0.1616 1.2224 0.1712 2.4624 0.2688 3.9536C651.9792 967.1152 371.52 967.1152 90.1488 967.1152z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)