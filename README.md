# 🛡️ Infringewatch

> A decentralized protocol for monitoring, detecting, and enforcing intellectual property (IP) rights across digital platforms using AI and DePIN infrastructure.

---

## 🧩 Problem Statement

Intellectual Property (IP) creators often suffer from unauthorized use, reposting, and plagiarism across the internet. Centralized enforcement systems are inefficient, costly and limited in scope. InfringeWatch empowers creators with decentralized tools to monitor and enforce IP rights in real-time using community validation, AI-driven scanning, and on-chain transparency.

---

## 🚀 Features

- **Decentralized IP Monitoring**
  - Leverages a distributed network of users to detect copyright/IP infringement in recorded content.

- **AI-Powered Infringement Detection**
  - Utilizes local machine learning models to scan recordings for unauthorized use of creative works.

- **Privacy-Preserving Local Processing**
  - Users can process data on their own GPU/CPU — no raw media is uploaded to centralized servers.

- **Tokenized Incentives**
  - Contributors are rewarded with tokens for:
    - Uploading recordings
    - Running AI models
    - Validating AI results
    - Referring new participants

- **Referral & Community Growth Tools**
  - Built-in dashboard for referrals, with tracking and reward distribution.

- **Open Contribution Model**
  - Anyone can join as a node, contribute training data, or improve models to make infringement detection smarter.

- **User-Friendly Web Dashboard**
  - A streamlined interface to manage recordings, run scans, earn rewards, and grow the network.


---

## 📊 DePIN Dashboard

A minimal and powerful dashboard with four main modules:

1. **🎥 Recording Manager**
   - Upload and view your screen/audio recordings
   - Tag content with IP categories (e.g. artwork, script, music)

2. **🧠 Local Processing**
   - Run AI infringement models on your own device (GPU/CPU)
   - Validate matches locally to contribute without data leaving your device

3. **💰 Rewards Console**
   - Earn tokens for:
     - Uploading training data
     - Running AI inference
     - Validating IP violations
   - Track earnings, contribution stats, and task history

4. **📢 Referral Dashboard**
   - Invite others to join as DePIN nodes or validators
   - Monitor referral signups, rewards, and community impact

---

## ⚙️ Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL / Supabase
- **AI Models**: Hosted locally via Python microservices
- **DePIN Infra**: Screenpipe (scanner runners, validator mesh)

---

## 🧪 Local Setup

To set up Infringewatch on your local device:

1. **Download the `.exe` Installer**
   - Visit our [Releases](https://github.com/YOUR_REPO/releases) page to get the latest `.exe` file.
   - This installer will automatically fetch the latest build from ScreenPipe.

2. **Install the Infringewatch Plugin**
   - Once ScreenPipe is installed, open the app and go to the **AI App Store**.
   - Search for **Infringewatch** and click **Install**.

That's it! You’re now ready to:
- Upload or record media
- Scan content using local AI models
- Start earning rewards

---

## 🌱 Future Development Ideas

1. **IP ownership report** – Creators can subscribe to the real-time monitoring service and get alert on infringement on their registered IP.
2. **Decentralized arbitration DAO** – Allow community to vote on disputes or false positives.
3. **Real-time video scanning support** – For live streams and time-based watermark detection.
4. **Cross-platform integration APIs** – Plug directly into Story Protocol, YouTube, TikTok etc. for takedown automation.
5. **Creator reward pool** – Pay creators when infringers are penalized via bounty capture.

## ❓ Q&A from Judges

### 🎥 Why Are There Recordings on the Front Page?
We use [ScreenPipe](https://screenpi.pe/), an open-source 24/7 screen/audio recording tool. It allows users to passively record their screens and, with permission, automatically upload recordings to our server.

There are two types of recording contributions:
- **Automatic uploads** (if no privacy issues are detected)
- **Manual uploads** (if privacy-related content is flagged)

These recordings appear on the dashboard to await further scanning or validation by contributors.

---

### 💰 Why Upload to "Earn from Copyright Detection"?
We reward users in two main roles:

#### 1. **User A – Recording Contributor (Low Resource)**
- Contributes screen/audio recordings
- Uses minimal system resources (~10% CPU, 4GB RAM)
- Helps feed the system with diverse real-world data

#### 2. **User B – Processing Contributor (High Resource)**
- Downloads AI models and recordings from User A
- Runs AI inference locally using their GPU
- Detects potential IP violations and submits structured results
- Earns higher token rewards for GPU compute work

The system is designed to reward both roles, especially when copyright infringement is successfully detected. Since we monetize this detection for IP creators, we redistribute a portion of that revenue to contributors.

---

### 🧠 What happens in the Data Labelling Tab?
This tab is specifically designed for processing contributors (User B or technically inclined users). It allows them to:

- **Download AI models** (prepared by protocol, third party partnership or open source) 
- **Download recording file** from the server (contributed by user A)
- **Run batch processing** for multiple recording
- **Submit detection results** to the server

This creates a peer-to-peer-style processing system where anyone can help enforce IP rights.

---

### ⚠️ UX Note – Why Separate Dashboard & Data Labelling Tabs?
A key UX consideration came up with **User C**, who both uploads recordings (like user A) and processes them (like user B).

Since most recordings are auto-uploaded to the server, **user C has to compete with other processing contributors** to scan their recording, even their own recordings. Ideally, they would be able to process and upload results directly — but we chose not to for a few reasons:

1. We anticipate most creators will want to contribute only recordings (user A role).
2. Processing recordings is resource-intensive (GPU-heavy), so we expect to manually onboard dedicated data processing teams (user B role) to help scale AI inference on IP infringement.
3. This separation makes it easier to manage user incentives (prevent self recording & processing cheating behaviour), workflows, and future improvements like DAO-based arbitration or bounties.

---
