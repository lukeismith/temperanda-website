---
# Generated from haptics-lap-app (site/support.html). Do not edit here.
# Change the page in haptics-lap-app, then run marketing/run.sh sync-temperanda there.
title: "Support: Haptics Lab"
description: "Support for Haptics Lab: contact, a haptic that does not play, Generate, the connection of an AI agent, Haptics Lab Pro, your API key, and the generated code."
---

<p class="intro">This page gives the answers to frequent questions about Haptics Lab. If your question is not here, send us an email.</p>
<nav class="toc" aria-label="On this page">
<p class="eyebrow">On this page</p>
<ol>
<li><a href="#contact">Contact</a></li>
<li><a href="#no-haptic">A haptic does not play</a></li>
<li><a href="#generate">Generate</a></li>
<li><a href="#connect">Connect an AI agent</a></li>
<li><a href="#pro">Haptics Lab Pro and Restore</a></li>
<li><a href="#api-key">Your API key</a></li>
<li><a href="#generated-code">Generated code</a></li>
<li><a href="#privacy">Privacy</a></li>
<li><a href="#requirements">Requirements</a></li>
</ol>
</nav>
<h2 id="contact">Contact</h2>
<p>For a question or a problem, send an email to <a href="mailto:info@temperanda.com">info@temperanda.com</a>. Tell us the model of your iPhone, the version of iOS, and the version of the app. Settings, About in the app shows the version of the app.</p>
<h2 id="no-haptic">A haptic does not play</h2>
<p>Examine these items in this order. They are the items of the part "On this iPhone" of the checklist in the app.</p>
<ol class="checklist">
<li>
<h3>This device has no haptic hardware.</h3>
<p>A haptic needs an iPhone with haptic hardware. The simulator and iPad have no haptic hardware. Core Haptics needs iPhone 8 or later. On a device with no haptic hardware, the visualizers still show each haptic.</p>
</li>
<li>
<h3>System Haptics is off.</h3>
<p>Apple says that feedback plays only when the system Haptics setting is on. Open the Settings app of the iPhone, then Sounds &amp; Haptics. Set System Haptics to on. Apple does not say if Core Haptics obeys this setting.</p>
</li>
<li>
<h3>Vibration is off in Accessibility.</h3>
<p>Apple documents a switch that stops all vibrations. Open the Settings app of the iPhone, then Accessibility, then Touch. Set Vibration to on. The page <a href="https://support.apple.com/guide/iphone/turn-off-vibration-iphd722c9100/ios">Turn off vibration on iPhone</a> of Apple describes the switch.</p>
</li>
<li>
<h3>Low Power Mode is on.</h3>
<p>Apple does not document an effect of Low Power Mode on haptics.</p>
</li>
<li>
<h3>Silent mode is on.</h3>
<p>Apple does not document an effect of Silent mode on haptic events. Silent mode can stop the audio of a pattern.</p>
</li>
<li>
<h3>The app is not in the foreground.</h3>
<p>Feedback plays only while the app is in the foreground. The app stops the haptic engine when it goes to the background.</p>
</li>
<li>
<h3>The haptic engine stopped or failed.</h3>
<p>The diagnostics page shows the engine state, the last error, and the log. Open Settings in the app, then Diagnostics.</p>
</li>
</ol>
<p>The app has the full checklist, with the causes in your own code and a live status for some items. Open Settings in the app, then "Why does a haptic not play?". The route of the checklist is <code>settings/why-no-haptic</code>.</p>
<h2 id="generate">Generate</h2>
<h3>Generate shows "No model is available"</h3>
<p>This iPhone has no Apple model that the app can use. The on-device model needs iOS 26 or later and Apple Intelligence. If the iPhone does not have them, add your API key from Anthropic or OpenAI. Open Settings in the app, then AI API key.</p>
<h3>A request takes a long time</h3>
<p>The on-device model can need more than 30 seconds for one pattern. To stop the request, tap Cancel.</p>
<h3>The service did not accept your API key</h3>
<p>Open Settings in the app, then AI API key. Save the key again, then tap Get the list of models. When the key works, the panel shows "The service accepted the key."</p>
<h3>The order of the models</h3>
<p>In Settings, the row Model for Generate selects the model. In the automatic mode, the app uses the model of your API key first. Then it uses the model on this iPhone.</p>
<h2 id="connect">Connect an AI agent</h2>
<p>The MCP server of the app lets an AI agent on your computer play haptics on your iPhone.</p>
<h3>Before you start</h3>
<ul>
<li>The iPhone and the computer must be on the same Wi-Fi network.</li>
<li>Guest, office, and hotel networks can block the connection with client isolation. If the agent cannot connect, use a different network.</li>
<li>The app must stay in the foreground. The server stops when the app goes to the background.</li>
<li>iOS can ask for permission to use the local network for Haptics Lab. Allow it.</li>
<li>macOS can ask for permission to use the local network for Claude Desktop or Cursor. Allow it.</li>
</ul>
<h3>Steps</h3>
<ol>
<li>In the app, open Agents, then Connect.</li>
<li>Turn on the switch MCP server.</li>
<li>The screen shows the Address row and the Token row. In the texts below, replace <code>&lt;url&gt;</code> with the value of the Address row, for example <code>http://192.168.1.20:8765/mcp</code>. Replace <code>&lt;token&gt;</code> with the value of the Token row.</li>
<li>Under Setup, select your agent. The screen shows the setup text for that agent. Tap Copy, then add the text to your agent.</li>
</ol>
<h3>Claude Code</h3>
<p>Claude Code connects to the server with this command. Run it in a terminal on the computer. The <a href="https://code.claude.com/docs/en/mcp">MCP page of Claude Code</a> gives more information.</p>
<pre><code>claude mcp add --transport http haptics-lab &lt;url&gt; --header "Authorization: Bearer &lt;token&gt;"</code></pre>
<p>The same server as JSON. Put this text in the file <code>.mcp.json</code> of your project:</p>
<pre><code>{
  "mcpServers": {
    "haptics-lab": {
      "type": "http",
      "url": "&lt;url&gt;",
      "headers": { "Authorization": "Bearer &lt;token&gt;" }
    }
  }
}</code></pre>
<h3>Cursor</h3>
<p>Nobody tested this setup text with Haptics Lab yet. Put the text in the file <code>mcp.json</code> of Cursor. The <a href="https://cursor.com/docs/mcp">MCP page of Cursor</a> tells where that file is.</p>
<pre><code>{
  "mcpServers": {
    "haptics-lab": {
      "url": "&lt;url&gt;",
      "headers": { "Authorization": "Bearer &lt;token&gt;" }
    }
  }
}</code></pre>
<h3>Claude Desktop</h3>
<p>Nobody tested this setup text with Haptics Lab yet. The text starts the bridge <code>mcp-remote</code>. The bridge needs Node.js for <code>npx</code>. Put the text in the file <code>claude_desktop_config.json</code>. The <a href="https://modelcontextprotocol.io/docs/develop/connect-local-servers">page about local servers</a> tells where that file is.</p>
<pre><code>{
  "mcpServers": {
    "haptics-lab": {
      "command": "npx",
      "args": ["-y", "mcp-remote@0.14.3", "&lt;url&gt;", "--allow-http", "--header", "Authorization: Bearer &lt;token&gt;"]
    }
  }
}</code></pre>
<h3>Test the connection</h3>
<p>Run this command on the computer. Replace <code>&lt;address&gt;</code> with the IP address of the Address row, and <code>&lt;token&gt;</code> with the value of the Token row. The iPhone plays a haptic, and the list Calls of the Connect screen shows the call.</p>
<pre><code>curl -sS -X POST http://&lt;address&gt;:8765/mcp \
  -H "Authorization: Bearer &lt;token&gt;" -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" -H "MCP-Protocol-Version: 2026-07-28" \
  -H "Mcp-Method: tools/call" -H "Mcp-Name: play_haptic" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"play_haptic","arguments":{"action":{"type":"impact","style":"rigid","intensity":0.8}},"_meta":{"io.modelcontextprotocol/protocolVersion":"2026-07-28","io.modelcontextprotocol/clientInfo":{"name":"curl","version":"8"},"io.modelcontextprotocol/clientCapabilities":{}}}}'</code></pre>
<p>The server accepts at most 10 play calls in 10 seconds. It rejects a haptic that plays for more than 30 seconds.</p>
<h3>Stop the access of an agent</h3>
<p>To stop all agents, turn off the switch MCP server. To stop an agent that has the token, tap Make a new token. The old token then stops working. Give the new token only to the agents that you trust.</p>
<h2 id="pro">Haptics Lab Pro and Restore</h2>
<p>The app has no ads, and each function is free. After each 10 minutes of use in the foreground, the app shows a message that asks you to support the app. One purchase, Haptics Lab Pro, removes this message. Open Settings in the app, then Haptics Lab Pro, then buy the product. You can also tap Get Pro in the message.</p>
<p>The purchase is for your Apple Account. On a different iPhone, or after you install the app again, open the same screen and tap Restore purchase.</p>
<h2 id="api-key">Your API key</h2>
<p>Generate can use your own API key from Anthropic or OpenAI. The key stays in the Keychain on this iPhone. Before the app sends your description to a service for the first time, it asks for your permission.</p>
<p>To remove the key, open Settings in the app, then AI API key, then Remove the key. iOS can keep the key in the Keychain after you remove the app. When you install the app again, the app removes that old key before it uses a key.</p>
<h2 id="generated-code">Generated code</h2>
<p>The default minimum version of the generated code is iOS 18.0. The code has an availability check for each API that is newer than the minimum. To change the minimum, open Settings in the app, then Minimum iOS version in the part Export.</p>
<h2 id="privacy">Privacy</h2>
<p>The app has no account and no analytics of its own. The <a href="/privacy/haptics-lab/">privacy policy</a> gives each part of the app that sends data, the data, and the receiver.</p>
<h2 id="requirements">Requirements</h2>
<ul>
<li>An iPhone with iOS 18 or later.</li>
<li>Generate with no key needs iOS 26 or later and Apple Intelligence.</li>
<li>Connect needs a computer on the same Wi-Fi network.</li>
</ul>
