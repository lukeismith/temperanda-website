---
# Copy from the Haptics Lab store text (haptics-lap-app, marketing/appstore/en-US/) and the
# retired landing page. The images are the raw App Store captures
# (marketing/screenshots/raw/) and the app icon (marketing/icon/AppIcon-1024.png).
# Facts to keep: the Composer has four parameters (never "lanes"); there are two visualizer
# styles, Trace and Metal Trace (the default); only Claude Code was tested with Connect.
name: Haptics Lab
tagline: Learn haptics by feel.
description: The most comprehensive iPhone haptics developer tool available, for free, with no ads.
category: ios
status: in-development
platforms: ['iOS 18 or later']
# The page's colours: phosphor green (src/styles/global.css).
theme: haptics-lab
appCategory: DeveloperApplication
featured: true
order: 1
# To launch: status: available, links: { appStore: https://apps.apple.com/app/id... }
privacyPolicy: /privacy/haptics-lab/
support: /support/haptics-lab/
icon: ../../assets/products/haptics-lab/icon.png
heroImage: ../../assets/products/haptics-lab/01-see.png
heroImageAlt: The Haptic pattern entry of the catalog. Its description and API names sit above a live trace, where a blue spike marks a tap and an orange block shows a continuous buzz. The Play control reads 0.850 s of 0.900 s.
sections:
  howItWorks:
    heading: Play. Watch. Copy.
    intro: The whole lab, in three steps.
  features:
    heading: Everything between the first tap and the code you ship.
  more:
    eyebrow: More in the lab
    heading: Small things that save an afternoon.
  privacy:
    heading: What stays on your iPhone
  pricing:
    heading: Free, with no ads.
    intro: Every function of Haptics Lab is free. Purchasing pro helps support my development effort.
  faq:
    eyebrow: Questions
    heading: Everything you need to know.
  cta:
    heading: Ready to learn haptics by feel?
    intro: Haptics Lab is in development. When it reaches the App Store, the link will appear right here.
howItWorks:
  - title: Play.
    body: Pick a haptic from the catalog and press Play to feel it. Excerpts from Apples documentation accompany every entry to provide additional context for the code behind the scenes.
  - title: Watch.
    body: A live trace draws the intensity and sharpness of each event as it plays, so you can visualize each haptic.
  - title: Copy.
    body: Haptics lab generates code you can copy to integrate into your application. For custom haptics created in the app, you can export in swift, or swift + an AHAP file.
# Each feature's screenshot crossfades in the phone. The hero screenshot is not reused here.
features:
  - title: Catalog
    body: Every haptics API from iOS 18 to iOS 27, in 13 groups, each with a version badge. Each entry explains its API in plain words and links to Apple's documentation. Where an entry plays a haptic, press Play to feel it.
    image: ../../assets/products/haptics-lab/08-catalog.png
    imageAlt: The Catalog. A search field sits above the list of groups, from Semantic feedback with 18 entries and SwiftUI triggers with 3 to Silent on iPhone, Core Haptics building blocks, and Live modulation, each with a short description.
  - title: Export
    body: The code you copy is the code that played. Take Swift for Core Haptics, an AHAP file with the Swift that loads it, or a one-line UIKit or SwiftUI call for a simple haptic. On export, a compatibility check for your chosen iOS version runs to help ensure a smooth development workflow.
    image: ../../assets/products/haptics-lab/02-code.png
    imageAlt: The code of an entry. Core Haptics is the selected export form, and a file named ThreeEventsHaptics.swift shows the Swift that starts the haptic engine and plays the pattern, with a Copy button above it.
  - title: Composer
    body: "Draw your own patterns with four parameters: transients, continuous events, an intensity curve, and a sharpness curve. Edit with the inspector, snapping, zoom, loop playback, and undo, or tap to record a rhythm. Start from one of eight templates and keep what you make in your library."
    image: ../../assets/products/haptics-lab/03-compose.png
    imageAlt: The Composer with the Ramp template. An intensity curve and a sharpness curve rise across a one-second event, above the four parameter buttons Transients, Continuous, Intensity, and Sharpness, the transport controls, and an inspector with sliders for time, duration, and intensity.
  - title: Agentic Haptic Generation
    body: Describe a haptic in words, like “a ball that bounces and loses energy”, then play the pattern, refine it, or open it in the composer. On iOS 26 or later with Apple Intelligence, Apple's on-device model writes it with no key and no cost. With your own Anthropic or OpenAI key, Generate also works on iOS 18 to iOS 25, and the key stays in the Keychain on your iPhone.
    image: ../../assets/products/haptics-lab/04-generate.png
    imageAlt: Generate. Three example descriptions sit above a Generate button and the result, Faster heartbeat, a trace of quickening taps that ends in a soft hum. Below it are a Play button and the details, On-device model, 9 events, and 3.400 s.
  - title: MCP Server
    body: Turn on the MCP server, and an AI agent on your computer, such as Claude Code, plays haptics on your iPhone over Wi-Fi. It can also read the catalog and your patterns, save a pattern, export Swift or AHAP, and open a pattern in the composer. The server is off by default, stays on your local network, runs only while Haptics Lab is on screen, and needs a pairing token.
    image: ../../assets/products/haptics-lab/05-connect.png
    imageAlt: The Connect screen. The MCP server switch is on, with its local address and a pairing token below it. Under Setup, Claude Code command is selected and its terminal command is ready to copy.
  - title: Scenarios
    body: About twenty demos show haptics in real interfaces, from sliders to pull to refresh and streaming text. Each one has an on and off comparison and shows its code. Drop in a catalog haptic or one of your own patterns to feel it in context.
    image: ../../assets/products/haptics-lab/06-scenarios.png
    imageAlt: The Streaming text demo. A reply streams in one character at a time under the question Tell me about haptics, and the signal below it shows a short haptic tick for each character.
  - title: Visualizers
    body: The trace shows the intensity and sharpness of a haptic while it plays. Metal Trace, the default style, draws it with smooth lines and a glow, and you can switch to the plain Trace style in Settings. Apple does not publish the waveforms of the system haptics, so the app draws a labeled estimate for them.
    image: ../../assets/products/haptics-lab/07-scope.png
    imageAlt: The visualizer of the Parameter curve entry. A glowing orange intensity curve climbs to a peak and falls again across the grid, a dashed blue sharpness line holds at 0.5, and the Play control reads 1.900 s of 2.000 s.
more:
  - title: Diagnostics
    body: When a haptic does not play, a diagnostics page, a numbered self-test, and a checklist help you find the cause.
    icon: pulse
  - title: AHAP import
    body: Open an AHAP file from Files in the composer, then play it, change it, and export it again.
    icon: import
  - title: Your library
    body: Keep the patterns you draw or generate. Put one in a scenario demo to feel it in context, or let your agent read it over Connect.
    icon: stack
  - title: A first-run tutorial
    body: A short tutorial shows the composer's controls the first time you open it. The More menu shows it again whenever you want a refresher.
    icon: book
privacy:
  - title: No account, no server
    body: Haptics Lab has no account and no sign-in. We run no server for the app, and the app sends no personal data to us.
  - title: No ads, no tracking
    body: The app shows no ads and has no analytics of its own. It contains no code from other companies for ads or analytics.
  - title: Your key, only with your permission
    body: If you add an Anthropic or OpenAI key for Generate, the app asks before it sends anything. Requests go straight from your iPhone to that service, and the key stays in the Keychain on this iPhone.
  - title: Connect stays on your network
    body: The MCP server is off by default, uses only your local network, and runs only while the app is in the foreground.
requirements:
  - An iPhone with iOS 18 or later.
  - Optional. Generate with no key needs iOS 26 or later and Apple Intelligence. With your own key for Anthropic or OpenAI, it works on iOS 18 to iOS 25.
  - Optional. Connect needs a computer on the same Wi-Fi network as your iPhone.
pricing:
  plans:
    - name: Free
      price: $0
      description: Every function of the app, with no ads and no account. After each 10 minutes of use, a short message asks you to support the app.
      features:
        - The full catalog, export, and composer
        - Generate, Connect, and every scenario
        - No ads, no account
    - name: Haptics Lab Pro
      price: $4.99
      period: one time
      description: One in-app purchase that removes the support message. Everything else stays exactly the same.
      highlight: true
      features:
        - No support message
        - Restore it on another iPhone with your Apple Account
        - Keeps an independent app going
  note: The price is in US dollars. The App Store shows the price for your country.
faq:
  - q: When does Haptics Lab launch?
    a: Soon. Haptics Lab is in development, and there is no App Store link yet. When there is one, it will appear on this page.
  - q: Is it really free?
    a: Yes. Every function is free, and the app has no ads. After each 10 minutes of use, a short message asks you to support the app. Haptics Lab Pro, a one-time purchase of $4.99, removes it.
  - q: Does my phone need to support Apple Intelligence for Generate?
    a: Only if you do not provide your own OpenAI or Anthropic API key. With no key, Generate can use Apple's on-device model or their private cloud compute model, which needs iOS 26 or later and Apple Intelligence.
  - q: Will the exported code work in my app?
    a: The exported code is the same code that played in the lab. It targets iOS 18.0 by default, with an availability check for each newer API, and you can change the minimum version in Settings.
  - q: Why does a haptic not play?
    a: Most often a system setting is the cause. Check that System Haptics is on in Sounds & Haptics, and that Vibration is on in Accessibility. The app has a full checklist and a self-test in Settings, and the support page goes through each cause.
  - q: Is Haptics Lab made by Apple?
    a: No. Haptics Lab is made by Temperanda, a small independent studio. Haptics Lab is not affiliated with Apple Inc. Apple, iPhone, Core Haptics, Swift, SwiftUI, and Keychain are trademarks of Apple Inc., registered in the U.S. and other countries and regions. Apple Intelligence is a trademark of Apple Inc.
---
