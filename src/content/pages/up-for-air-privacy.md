---
title: Up For Air privacy policy
description: What the Up For Air iPhone app keeps on your phone, what goes to Apple, and what reaches Temperanda. Nothing from the app reaches us.
updated: 2026-09-27
---

<!-- Draft written 2026-09-27 from a review of the app's code and Apple's and legal sources.
     Every [confirm: ...] needs your answer before App Store Connect links here.
     The evidence for each statement is in the review's findings file (see the session notes). -->

**Effective date:** [confirm: the publication date. The page template also prints "Last updated" from the page's `updated` frontmatter, so keep the two dates the same.]

## In short

Up For Air has no account and no server. What the app knows about you stays on your iPhone, and we do not receive it. The app has no analytics, no ads, no tracking, and no third-party code. A few things go to Apple, because Apple runs the App Store, the maps, and Siri. This page lists each one.

## Who we are

Up For Air is made by Temperanda LLC, a small software company based in Chicago, Illinois. [confirm: that this is the right city and state for the LLC, and whether you want to name the state where it is registered.] In this policy, "we" and "us" mean Temperanda LLC.

You can reach us at [info@temperanda.com](mailto:info@temperanda.com). [confirm: the site's footer uses info@temperanda.com, but the Support page uses hello@temperanda.com. Pick one address and use it in both places.]

## What the app keeps on your iPhone

The app saves its data in its own storage on your iPhone. The app's widgets and its Screen Time extensions can read part of that storage. The extensions are small parts of the app that iOS runs to show a lock and to lift it. None of this data is sent to us.

**Rabbit holes and Screen Time.** You choose the apps, categories, and websites to lock in Apple's Screen Time picker. Apple gives the app coded tokens for your choices, not the names of the apps. The app keeps these tokens so it can lock and unlock them.

- If you type website addresses to lock, the app keeps that list.
- If you use Match your apps, the app keeps which app you matched to each lock, so it can open that app for you after an unlock.
- During an unlock, Screen Time tells the app each time you pass a set amount of time in your locked apps. The app uses this to charge only the minutes you use.
- The app keeps the start time and length of each unlock. It uses the last seven days of unlocks to notice when you unlock more often than usual.

The app cannot see what you do inside other apps or websites.

**Your minutes.** The app keeps a ledger of the minutes you make and spend: when, from what activity, and how many. It also keeps your earning rates, daily limits, and completed focus blocks.

**Apple Health.** If you allow it, the app reads three things from Apple Health: step counts, workouts, and mindful minutes. For workouts, it reads only how long each one lasted. The first time you connect, it reads only the last three days.

For each reading it turns into minutes, the ledger keeps the amount (for example, a number of steps) and the time. This stops the same reading from counting twice. The app never writes to Apple Health. We never receive your Health data, never use it for advertising, and never sell it.

**Location and zones.** A zone is an area you draw on a map, like your gym. The app keeps each zone's name and the corners of its area. iOS watches for you to arrive at or leave a zone.

When iOS reports an arrival, the app checks your location once to confirm that you are inside the zone. It does not save that location. It saves only the times you arrived at and left each zone, and the minutes you made there. The app does not record where you go outside your zones, and it uses your location for nothing else.

**Checkpoints.** A checkpoint is a QR card or an NFC tag that you make in the app. The app keeps each checkpoint's name and what it does.

- The QR code and the tag hold a link to temperanda.com with a random code. The code contains only a random ID and the action, such as "start a 25-minute focus block". It does not contain your name or the checkpoint's name.
- The printed card shows the checkpoint's name as text.
- The camera is used only to read checkpoint QR codes in the app's scanner. The app does not take or save photos.
- The app uses NFC only when you start a tag read or a tag write.

**Other things you type.** The app keeps your bunny's name, your pause settings, and your other preferences.

**Your subscription.** The app asks the App Store on your iPhone which plan you have. It never sees or stores your payment details.

**Widgets, Live Activities, and Siri.** Widgets and Live Activities show your minutes, what you made today, and a running session, including the name of the app it opened. They can appear on your Lock Screen, where anyone holding your phone can see them. Live Activities are updated on the phone, not through a server. Siri and Shortcuts answer from the data on your phone.

**A small technical log.** The app keeps its last 200 technical events, such as when a lock went up or came down. We use this to find Screen Time problems. It can include the names you gave to matched apps and the links the app opened. The log stays on your iPhone, and the app does not send it anywhere.

## What leaves your iPhone

**To us: nothing from the app.** The app's own code makes no network requests. It has no account, no analytics, no advertising, no crash reporting of its own, and no third-party code. We do not sell, rent, or share your data with anyone.

**To Apple, in these cases.** Apple handles this data under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

- **Purchases.** The App Store takes your payment. We never see your card or your Apple Account. Apple sends us sales and subscription reports. These show things like which plan was bought and in which country, under an ID that Apple makes for us, not your name.
- **Maps and place search.** The zone editor uses Apple's map service. Your iPhone gets the map and the place search results from Apple. The text you type in the search box goes to Apple to find matching places. It does not come to us.
- **Siri.** If you use Siri with Up For Air, Siri handles your request under Apple's privacy policy.
- **Crash reports and usage statistics.** These go to Apple only if you turned on Share With App Developers in Settings > Privacy & Security > Analytics & Improvements. Apple then shares crash reports and statistics with us that do not identify you personally. We use them only to fix problems. You can turn this off in the same place.
- **Beta testing.** If you test Up For Air through TestFlight, Apple shares crash logs, usage information, and any feedback you send with us. If we invited you by email, this includes your name and email address. We use it only to improve the app. [confirm: how long you keep TestFlight feedback after Apple shows it to you.]

**Backups.** When you back up your iPhone to iCloud or to a computer, the backup includes Up For Air's data, like other apps' data. The app itself does not use iCloud or sync your data.

**What you choose to send.** You can print your checkpoint cards, save them as a PDF, or share them. They go only where you send them. The cards show each checkpoint's name and QR code. If you email us, we receive what you write.

**Checkpoint links on a phone without the app.** When the app is installed, iOS opens a checkpoint link in the app and does not contact our website. On a phone without the app, the link opens temperanda.com in the browser. The [site privacy policy](/privacy/) covers that visit.

## Permissions and how to turn them off

The app asks for each permission only for the feature that needs it. You can change your answer at any time.

- **Screen Time** locks your rabbit holes. Up For Air needs it to work. To turn it off, go to Settings > Screen Time. [confirm: the exact path on the iOS versions you support. The app's copy deck says "Settings > Screen Time > Apps with Screen Time Access" and asks for a check before shipping.]
- **Apple Health** makes minutes from steps, workouts, and mindful minutes. In the Health app, tap Summary, tap your picture, then under Privacy tap Apps, then Up For Air.
- **Location** makes minutes at your zones. "While Using" works when the app is open. "Always" lets iOS wake the app when you arrive at a zone. Go to Settings > Privacy & Security > Location Services > Up For Air.
- **Camera** scans checkpoint QR codes. Go to Settings > Privacy & Security > Camera.
- **NFC** has no setting. The app reads or writes a tag only when you start it and hold your iPhone near the tag.
- **Notifications** are made by the app on your iPhone, not sent from a server. The app uses them to take you from a locked app into Up For Air. Go to Settings > Notifications > Up For Air.

When you turn a permission off, the feature that needs it stops. Data the app already saved stays on your iPhone until you delete it.

## How long data is kept, and how to delete it

The app keeps its data on your iPhone until you delete it. Nothing expires on its own.

- **In the app,** you can delete zones, checkpoints, and locked websites, and change your rabbit holes. When you delete a zone, the app deletes its map area. Your ledger keeps the minutes and the times of past visits, but not the zone's location.
- **Delete the app** to delete everything it saved. iOS removes the app's storage, including the part shared with its widgets and extensions. Your Apple Health data stays in Apple Health, because the app only reads it.
- **Backups** made before you deleted the app can still hold its data until those backups are deleted.

We hold no copy of your app data, so there is nothing for us to delete. If you email us, we keep your message so we can reply and follow up. [confirm: how long you keep support email, for example "up to two years, or until you ask us to delete it".] Ask us, and we will delete it.

## Children

Up For Air is made for people who manage their own iPhone. It uses Screen Time's mode for an individual, not parental controls, and it is not directed to children under 13. Because the app sends us nothing, we do not collect personal information from children through the app. If a child under 13 emails us, we will delete the message once we learn that. [confirm: the App Store age rating you choose.]

## Your rights

You control your app data directly. You can see it in the app, change it, and delete it, or delete the app.

For anything you send us by email, you can ask us to:

- tell you what we have,
- correct it,
- delete it, or
- stop using it.

Email us, and we will reply within 30 days. [confirm: that you can commit to 30 days. GDPR allows one month.]

**If you are in the European Economic Area, the United Kingdom, or Switzerland:** You also have the right to restrict our use of your data, to receive it in a portable form, and to complain to your local data protection authority. We use your email only to answer you and follow up. This is our legitimate interest in replying (GDPR Article 6(1)(f)). We are in the United States, so your email is handled there. [confirm: your email provider and where it stores mail, if you want to name it.]

**If you are in California:** We do not sell or share personal information. We do not use it for targeted advertising. We will not treat you differently for asking about your data. Through the app, we collect no personal information. Through email, we receive only what you write to us.

**Do Not Track:** Neither the app nor our website tracks you across other apps or websites. No other company can use Up For Air to collect information about your activity over time and across other websites or apps. So there is nothing for a Do Not Track signal to change.

## Security

iOS encrypts the app's data on your iPhone with its standard data protection. Keep a passcode on your iPhone, because it protects this data. Because the data never reaches us, a breach of our systems cannot expose it.

## Changes to this policy

When we change this policy, we will update this page and its effective date. If a change would send data off your iPhone, we will tell you in the app before that happens. [confirm: that you want to make this promise. It stops a later feature (for example, a sync service) from launching quietly.]

## Contact

Temperanda LLC, Chicago, Illinois
[info@temperanda.com](mailto:info@temperanda.com) [confirm: the same address question as above.]
