---
# Draft copy, written from the app's copy deck (design/up-for-air/1-almanac/COPY.md) and code.
# Anything marked [confirm] needs your review before launch. The images are crops of the
# Almanac design gallery renders, with placeholder bunny art; replace them with device screenshots.
name: Up For Air
tagline: Everyone has a rabbit hole or two.
description: Up For Air is an iPhone app that locks the apps you fall into. You make minutes in the real world, spend them when you like, and come back up at a time you choose.
category: ios
status: in-development
# Deployment target is iOS 18.0 in project.yml. [confirm before launch]
platforms: ['iOS 18 or later']
featured: true
order: 1
# To launch:
#   beta      -> status: beta,      links: { testFlight: https://testflight.apple.com/join/... }
#   available -> status: available, links: { appStore: https://apps.apple.com/app/id... }
# then replace the images in src/assets/products/up-for-air/ with real screenshots.
privacyPolicy: /privacy/up-for-air/
heroImage: ../../assets/products/up-for-air/hero.png
heroImageAlt: The Up For Air Home screen. A bunny on an illustrated hillside, 47 minutes to spare, and a ledger of the minutes made today.
screenshots:
  - src: ../../assets/products/up-for-air/limit.png
    alt: Choosing how long. A large 15 min, the line Back up at 3:40, quick picks of 5, 10, 15, and 30 minutes, and a button that reads Dip in for 15, back up at 3:40.
  - src: ../../assets/products/up-for-air/guilt-trip.png
    alt: The Guilt trip pause. The bunny sits by its hole and says, Do I have to go down? The clover just came up and I haven't had a nibble. Two replies sit under it.
  - src: ../../assets/products/up-for-air/earn.png
    alt: The Earn screen. A ledger of walking, workouts, mindful minutes, focus blocks, zones, and checkpoints, with the rate under each row.
howItWorks:
  - title: Lock your rabbit holes.
    body: Choose the apps, categories, and websites that take your time. Screen Time keeps them locked until you choose to open one.
  - title: Make minutes up top.
    body: Steps, workouts, mindful minutes, focus blocks, and arrivals at places you choose all make minutes. A focus block needs nothing at all.
  - title: Spend them when you like.
    body: Open a locked app and choose how long. Up For Air shows the clock time you come back up, opens the app, and locks it again when that time comes.
features:
  - title: A ledger, not a score
    body: Home lists what you did today, the minutes each activity made, and the total you have to spare. The numbers never scold.
  - title: Five ways to make minutes
    body: Walking, workouts, and mindful minutes come from Apple Health. By default, 100 steps make 1 minute and a 25-minute focus block makes 15. You can change each rate and set a daily cap.
  - title: Focus blocks
    body: Put your phone down for 15, 25, 45, or 60 minutes. The minutes arrive when the timer ends. Stop early and you make nothing.
  - title: Zones
    body: A zone is a place that makes minutes when you arrive, like the gym or the library. Arriving makes 10 minutes, and every 10 minutes you stay makes 1 more. You can change both numbers for each zone.
  - title: Checkpoints
    body: A checkpoint is a printed QR card or an NFC tag that does one thing when you scan it. It can start a focus block, stop one, count your arrival at a zone, or end a session. Stick it where the habit lives.
  - title: A pause before you dip in
    body: Turn on a short step before you choose how long. Quick sum gives you one math problem, and the Guilt trip lets the bunny ask you to stay. Never mind is always one tap away.
  - title: You only spend what you use
    body: Choose a length, and the end is a clock time. End early, and the minutes you did not use stay to spare. Turning back at a pause is not an unlock, so it never makes the next one harder.
  - title: Your week up top, not a streak
    body: Seven suns, each sized by the minutes you made that day. A rest day is a small dot. There is no chain and nothing to break.
  - title: On your Lock Screen and in Control Center
    body: A Live Activity counts down the session. Widgets show your minutes to spare. Control Center and Siri can start a focus block or end a session.
  - title: An accountability bunny
    body: You name the bunny when you set up the app. It lives on the hillside at the top of Home, and its mood follows your day. During a session it waits in its hole.
privacy:
  - title: No account, no server
    body: Up For Air has no account and no server. The app sends nothing to us. Purchases, map searches, and Siri go to Apple, and the privacy policy lists each one.
  - title: What Screen Time gives the app
    body: Up For Air needs Screen Time permission to keep an app locked until you choose to open it. Apple asks you first. The app never sees what you do inside the apps you lock.
  - title: Apple Health, read only
    body: If you connect Apple Health, the app reads your steps, workouts, and mindful minutes on this phone only. It never writes to Apple Health.
  - title: Location, for zones only
    body: Zones need your location. The app records only that you reached one of your zones, never where else you go. Your zones and your location stay on your phone.
requirements:
  - "An iPhone with iOS 18 or later. [confirm]"
  - Screen Time permission. Setup does not continue without it, because nothing else keeps your rabbit holes locked.
  - Optional. Apple Health, for minutes from steps, workouts, and mindful minutes.
  - Optional. Location set to Always, so that zones count arrivals while the app is closed.
  - Optional. The camera or NFC, for checkpoints.
pricing:
  tiers: [Free, Premium]
  rows:
    - feature: Make and spend minutes
      values: [Included, Included]
    - feature: Rabbit holes
      values: [Two of each kind, Unlimited]
    - feature: Zones and checkpoints
      values: ["One each [confirm]", Unlimited]
    - feature: Pauses
      values: ["Quick sum [confirm]", All]
    - feature: "A note for next time [confirm]"
      values: [—, Included]
  note: Free is a real choice, and it stays free. Premium is a yearly or monthly subscription with a free trial. Prices come from the App Store and will appear here when the app is on it. [confirm the trial length and the rows marked confirm. The copy deck and the code disagree, and the note feature is designed but not built yet.]
faq:
  - q: When does Up For Air launch?
    a: A TestFlight beta comes first. When there is a link, it will appear on this page.
  - q: How is this different from Screen Time?
    a: Screen Time is what keeps the locks real. Up For Air adds the part Screen Time does not have. Your real-world activity makes the minutes, you choose how long, and you come back up at a clock time.
  - q: What happens if I do not allow Screen Time?
    a: Setup stops until you allow it, because nothing else keeps your rabbit holes locked. If your device cannot run Screen Time at all, the app runs in practice mode, where your rabbit holes are locked on the honor system.
  - q: Can the app see what I do in the apps it locks?
    a: No. Screen Time lets the app lock an app and unlock it. It does not show the app what you do inside.
  - q: Can I end a session early?
    a: Yes. You spend only the minutes you used, and the rest stay to spare. Your rabbit holes lock again right away.
  - q: Will it cost money?
    a: There is a free tier that locks two apps, two categories, and two websites, and it makes and spends minutes the same way as Premium. Premium is a subscription with a free trial, and it adds unlimited rabbit holes and more.
---

Up For Air is an iPhone app for the apps you fall into. You choose your rabbit holes, and Screen Time keeps them locked. The things you do in the real world make minutes: a walk, a workout, mindful minutes, a focus block with your phone down, or arriving at a place you chose.

When you want to open a rabbit hole, you choose how long. Up For Air shows the clock time you come back up, opens the app, and locks everything again when that time comes. If you come back early, the minutes you did not use stay to spare.

A bunny lives on the hillside at the top of the Home screen. You name it when you set up the app. It waves on a usual day, thinks when you have nothing to spare, and waits in its hole while a session runs. If you turn on the Guilt trip, it asks you to stay up top before you dip in. You decide.

Up For Air is in development. A TestFlight beta comes first. Follow along here, or [get in touch](/support/) if you want to hear about it.
