---
# Generated from haptics-lap-app (site/privacy.html). Do not edit here.
# Change the page in haptics-lap-app, then run marketing/run.sh sync-temperanda there.
title: "Privacy policy: Haptics Lab"
description: "The privacy policy of Haptics Lab. The app has no account and no analytics of its own. This page gives each part of the app that sends data, the data, and the receiver."
updated: 2026-10-06
---

<p class="intro">This policy applies to the Haptics Lab app for iPhone. It tells you which data leaves the iPhone, who gets the data, and how you control it.</p>
<nav class="toc" aria-label="On this page">
<p class="eyebrow">On this page</p>
<ol>
<li><a href="#summary">Summary</a></li>
<li><a href="#purchases">Purchases</a></li>
<li><a href="#generate">Generate</a></li>
<li><a href="#key">Your API key</a></li>
<li><a href="#connect">Connect and the MCP server</a></li>
<li><a href="#documentation">Documentation pages of Apple</a></li>
<li><a href="#apple">Data from Apple</a></li>
<li><a href="#iphone">Data on the iPhone</a></li>
<li><a href="#companies">Other companies</a></li>
<li><a href="#retention">How long data stays</a></li>
<li><a href="#changes">Changes to this policy</a></li>
<li><a href="#contact">Contact</a></li>
</ol>
</nav>
<h2 id="summary">Summary</h2>
<ul>
<li>Haptics Lab has no account and no sign-in.</li>
<li>The developer runs no server for the app. The app has no analytics of its own.</li>
<li>The app shows no ads and does not track you. It contains no code of other companies for ads or analytics.</li>
<li>The app sends no personal data to the developer. The developer gets data from you only when you send an email.</li>
<li>Some parts of the app send data to other companies or to your computer. The list below gives each part. The sections after the list give the details.</li>
</ul>
<ul class="flows">
<li>
<h3>Generate with your API key</h3>
<dl>
<dt>Data</dt><dd>Your description, the current pattern for a change, and your API key</dd>
<dt>Receiver</dt><dd>Anthropic or OpenAI, the service of your key</dd>
<dt>When</dt><dd>Only after you give permission</dd>
</dl>
</li>
<li>
<h3>Connect</h3>
<dl>
<dt>Data</dt><dd>Facts about the iPhone and the app, the catalog, and your saved patterns</dd>
<dt>Receiver</dt><dd>The AI agent on your computer, through the local network</dd>
<dt>When</dt><dd>Only while the switch MCP server is on and the app is in the foreground</dd>
</dl>
</li>
<li>
<h3>Purchases and documentation pages</h3>
<dl>
<dt>Data</dt><dd>The purchase, or the request for a documentation page</dd>
<dt>Receiver</dt><dd>Apple</dd>
<dt>When</dt><dd>When you buy or restore Haptics Lab Pro, or open a documentation page</dd>
</dl>
</li>
<li>
<h3>An email to the developer</h3>
<dl>
<dt>Data</dt><dd>Your email and your email address</dd>
<dt>Receiver</dt><dd>The developer</dd>
<dt>When</dt><dd>Only when you send the email from your mail app</dd>
</dl>
</li>
</ul>
<h2 id="purchases">Purchases</h2>
<p>Apple processes the Haptics Lab Pro purchase. Apple also processes Restore purchase. The app reads the state of the purchase from the App Store on the iPhone.</p>
<p>The developer gets no payment data and no data of your Apple Account from the app. The <a href="https://www.apple.com/legal/privacy/">privacy policy of Apple</a> applies to the purchase.</p>
<h2 id="generate">Generate</h2>
<p>Generate makes a haptic pattern from a description that you type. The data goes to a different place for each model.</p>
<h3>The on-device model</h3>
<p>On iOS 26 or later with Apple Intelligence, a model of Apple runs on the iPhone. Your description and the pattern stay on the iPhone.</p>
<h3>A model of Anthropic or OpenAI, with your API key</h3>
<p>You can add your own API key from Anthropic or OpenAI in Settings. Before the app saves the key or sends a first request, it shows the data that it sends and asks for your permission. When you do not allow it, the app sends nothing to that service.</p>
<p>After you allow it, each request sends these items from the iPhone directly to the service:</p>
<ul>
<li>The instructions of the app for the model.</li>
<li>Your description.</li>
<li>For a change of a pattern: the current pattern, and at most three of your earlier descriptions of that pattern.</li>
<li>Your API key, which tells the service the account that pays for the request.</li>
</ul>
<p>The app sends no other data. As with each request on the internet, the service also gets the IP address of your network.</p>
<p>When you save a key or tap Get the list of models, the app sends only your key to the service. The answer is the list of the models of the service. This request holds no description and no pattern.</p>
<p>These requests do not go through a server of the developer. The developer gets none of this data.</p>
<p>The service charges your account for each request. The service can keep the data. Its privacy policy gives the rules: read the <a href="https://www.anthropic.com/legal/privacy">privacy policy of Anthropic</a> or the <a href="https://openai.com/policies/">privacy policies of OpenAI</a>.</p>
<p>To stop the data transfer, open Settings in the app, then AI API key, then Stop the data transfer. The next request with the key asks for your permission again.</p>
<h2 id="key">Your API key</h2>
<ul>
<li>Your API key stays in the Keychain of this iPhone. The app stores it for this device only. Thus the key does not sync to your other devices and does not move to a new iPhone.</li>
<li>The app sends the key only to its own service, Anthropic or OpenAI. The key never goes to the developer.</li>
<li>The MCP server never gives the key to an AI agent. The app never shows the key after you save it.</li>
<li>To remove the key, open Settings in the app, then AI API key, then Remove the key.</li>
<li>iOS can keep the key in the Keychain after you remove the app. When you install the app again, the app removes that old key before it uses a key.</li>
<li>To remove the key at once, remove it in the app before you remove the app.</li>
</ul>
<h2 id="connect">Connect and the MCP server</h2>
<p>The MCP server lets an AI agent on your computer use parts of the app. MCP is the Model Context Protocol.</p>
<ul>
<li>The server is off by default. It starts only when you turn on the switch MCP server. The switch is off at each start of the app.</li>
<li>The server uses only the local network, not the cellular network. The data goes only between this iPhone and your computer.</li>
<li>The server runs only while the app is in the foreground.</li>
<li>The server accepts a request only with the pairing token. The token is in the Keychain of this iPhone. To stop the access of an agent, tap Make a new token.</li>
</ul>
<p>An agent with the token can read this data:</p>
<ul>
<li>Facts about the iPhone and the app. These are the app version, the model and the iOS version of the iPhone, and the haptic and audio support.</li>
<li>The state of Low Power Mode.</li>
<li>The catalog of the app.</li>
<li>Your saved patterns, and the Swift code or the AHAP file of a pattern.</li>
</ul>
<p>An agent can also play and stop haptics, save a pattern in your library, and open a pattern in the composer. The server never gives the API key or the token in a result.</p>
<p>Your agent can send the data that it gets to its own AI service. The privacy policy of the agent applies to that data. The developer gets no data from the server.</p>
<h2 id="documentation">Documentation pages of Apple</h2>
<p>Each catalog entry has a link to its documentation page on the website of Apple. The app opens the page in an in-app browser. Apple serves the page, and the privacy policy of Apple applies to it. The app cannot read what you do in the in-app browser.</p>
<h2 id="apple">Data from Apple</h2>
<p>When you allow it in the Settings app of the iPhone, Apple shares crash reports and usage data of the app with the developer. The privacy policy of Apple applies to this data.</p>
<p>The developer uses this data only to find problems in the app and to make the app better.</p>
<p>To change this permission, open the Settings app, then Privacy &amp; Security, then Analytics &amp; Improvements, then Share With App Developers.</p>
<h2 id="iphone">Data on the iPhone</h2>
<p>The app keeps your settings, your patterns, and your choices in the app on the iPhone. A backup of the iPhone can include them. When you remove the app, iOS removes them. The section <a href="#key">Your API key</a> gives the rule for the key.</p>
<h2 id="companies">Other companies</h2>
<p>These companies get data through the app, as the sections above state:</p>
<ul>
<li>Anthropic or OpenAI, only with your API key and your permission. Read the <a href="https://www.anthropic.com/legal/privacy">privacy policy of Anthropic</a> or the <a href="https://openai.com/policies/">privacy policies of OpenAI</a>.</li>
<li>Apple, for the purchase, the documentation pages, and the reports that you share. Read the <a href="https://www.apple.com/legal/privacy/">privacy policy of Apple</a>.</li>
</ul>
<p>Each of these companies gets only the data that this page names. Each company gives your data the same protection as this policy, or equal protection, under its own privacy policy.</p>
<h2 id="retention">How long data stays, and how to remove it</h2>
<ul>
<li>The developer has no server and keeps no data from the app.</li>
<li>The developer keeps an email from you only while it is necessary to answer it. Then the developer removes it.</li>
<li>To ask the developer to remove an email or other data about you, send an email to the address in the section <a href="#contact">Contact</a>.</li>
<li>To remove the data of the app on the iPhone, remove the app. Remove your API key first, as the section <a href="#key">Your API key</a> tells.</li>
<li>Anthropic, OpenAI, and Apple keep data under their own rules. Their privacy policies tell how long they keep data and how to ask for its removal.</li>
</ul>
<p>You can withdraw a permission at any time:</p>
<ul>
<li>The data transfer to Anthropic or OpenAI: open Settings in the app, then AI API key, then Stop the data transfer.</li>
<li>The access of an AI agent: turn off the switch MCP server, or tap Make a new token.</li>
<li>The reports that Apple shares: open the Settings app, then Privacy &amp; Security, then Analytics &amp; Improvements.</li>
</ul>
<h2 id="changes">Changes to this policy</h2>
<p>When this policy changes, the developer changes this page and the date at the top of the page.</p>
<h2 id="contact">Contact</h2>
<p>For a question about this policy, or to ask for the removal of your data, send an email to <a href="mailto:info@temperanda.com">info@temperanda.com</a>.</p>
