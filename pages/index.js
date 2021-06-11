import Head from 'next/head'

import DictionaryDownloadList from '../components/DictionaryDownloadList'
import FirmwareDownloadList from '../components/FirmwareDownloadList'
import DEVICES from '../constants/devices'
import DEFAULT_AFFILIATE from '../constants/affiliates.js'
import { fetchLatestUpdate } from '../helpers/koboapi'

export async function getStaticProps() {
  const allDevicesUpdatePromises = DEVICES.map((device) =>
    fetchLatestUpdate(device.id, DEFAULT_AFFILIATE).then((latestUpdate) => [
      device.id,
      { [DEFAULT_AFFILIATE]: latestUpdate },
    ])
  )

  const allDeviceUpdates = Object.fromEntries(
    await Promise.all(allDevicesUpdatePromises)
  )

  return {
    props: { updatesByDeviceId: allDeviceUpdates },
  }
}

export default function Home({ updatesByDeviceId }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Generated by create next app" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://roboe.gitlab.io/kobo-offline" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `// @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt
if (window.location.hostname !== 'localhost' && window.location.protocol === 'http:') {
  window.location = window.location.toString().replace(/^http:/, "https:");
}`,
          }}
        />

        <title>Kobo Offline</title>
      </Head>

      <div className="kobo-app">
        <header className="app-header">
          <div className="app-header--content">
            <h1 className="app-header--title">Kobo Offline</h1>
          </div>
        </header>
        <main className="app-main">
          <nav id="toc" className="toc">
            <ol>
              <li>
                <a href="#first-boot">First boot</a>
                <ol>
                  <li>
                    <a href="#skip-device-registration">
                      Skip device registration
                    </a>
                    <ol>
                      <li>
                        <a href="#easier-option-for-average-users">
                          Easier option for average users
                        </a>
                      </li>
                      <li>
                        <a href="#straightforward-option-for-tech-savvy-users">
                          Straightforward option for tech savvy users
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#update-firmware">Update e-reader firmware</a>
                <ol>
                  <li>
                    <a href="#how-to-install-firmware">
                      How to install offline firmware updates
                    </a>
                  </li>
                  <li>
                    <a href="#firmware-downloads">Firmware downloads</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#adding-dictionaries">Adding dictionaries</a>
                <ol>
                  <li>
                    <a href="#how-to-install-dictionaries">
                      How to install dictionaries
                    </a>
                  </li>
                  <li>
                    <a href="#dictionary-downloads">Dictionary downloads</a>
                  </li>
                </ol>
              </li>
            </ol>
          </nav>
          <section id="first-boot">
            <header>
              <h2>
                <a className="self-link" href="#first-boot"></a>
                <span>First boot</span>
                {/* https://www.darkcoding.net/misc/kobo-ereader-touch-on-ubuntu-linux/ */}
              </h2>
              <p>
                Avoid being forced to connect your e-reader to the internet and
                to create a Kobo account
              </p>
            </header>

            <p>
              When you start a Kobo e-reader for the first time, it{' '}
              <strong>blocks</strong> any interaction until you run the setup
              software (Win/Mac only) or connect the device to a WiFi point.
              This initial setup will do two things: it will force you to create
              a <code>kobobooks.com</code> account, and it will update your
              device's firmware.
            </p>

            <p>
              Some users would rather not connect their devices to the internet
              or create online accounts because of <strong>privacy</strong>{' '}
              concerns, while others may not be interested in buying e-books on
              Kobo's online marketplace. Furthermore, there's no setup software
              for other OSes like <strong>GNU/Linux</strong>, so you're left
              alone with the WiFi option.
            </p>

            <section id="skip-device-registration">
              <h3>
                <a className="self-link" href="#skip-device-registration"></a>
                <span>Skip device registration</span>
                {/* https://www.mobileread.com/forums/showthread.php?t=171664 */}
              </h3>

              <p>
                There is a simple way to by-pass the above mentioned
                restriction. The Kobo reader will skip it whenever a{' '}
                <code>user</code> is detected by its firmware. We could achieve
                this by editing the internal device database. There are two ways
                to do it: one for average users, and other for tech savvy ones.
              </p>

              <section id="easier-option-for-average-users">
                <h4>
                  <a
                    className="self-link"
                    href="#easier-option-for-average-users"
                  ></a>
                  <span>Easier option for average users</span>
                </h4>
                <ol>
                  <li>
                    Install{' '}
                    <a href="https://sqlitebrowser.github.io/sqlitebrowser/">
                      DB Browser for SQLite
                    </a>{' '}
                    and open the <code>KoboReader.sqlite</code> file that you
                    will find in the <code>.kobo/</code> directory.
                  </li>
                  <li>
                    Click on the <code>Browse Data</code> tab and select the{' '}
                    <code>user</code> table in the dropdown menu.
                  </li>
                  <li>
                    Click on the <code>New Record</code> button to register a
                    new user. A new row will be added. Then you can edit each
                    cell value by double-clicking on them.
                  </li>
                  <li>
                    Enter a random name (e.g. "Foo") in the{' '}
                    <code>UserDisplayName</code> cell.
                  </li>
                  <li>
                    Enter a random e-mail address (e.g. "bar@baz.qux") in the{' '}
                    <code>UserEmail</code> cell. It doesn't need to match the
                    standard e-mail address format.
                  </li>
                  <li>
                    Save the changes by clicking <code>File</code> &rarr;{' '}
                    <code>Save changes</code>.
                  </li>
                </ol>
              </section>

              <section id="straightforward-option-for-tech-savvy-users">
                <h4>
                  <a
                    className="self-link"
                    href="#straightforward-option-for-tech-savvy-users"
                  ></a>
                  <span>Straightforward option for tech savvy users</span>
                </h4>
                <details>
                  <summary>
                    Assuming you already have a command-line shell for SQLite
                    3&hellip;
                  </summary>
                  <ol>
                    <li>
                      Open the database by running{' '}
                      <code>$ sqlite3 ./.kobo/KoboReader.sqlite</code> in a
                      terminal (Linux, Mac) or command prompt (Windows).
                    </li>
                    <li>
                      Add a new record to the <code>user</code> table by running
                      the following query:{' '}
                      <pre>
                        <code>
                          INSERT INTO 'user' (UserID, UserKey, UserDisplayName,
                          UserEmail)
                          <br />
                          VALUES (3, '', 'Foo', 'bar@baz.qux');
                        </code>
                      </pre>
                      You can change those values. <code>UserID</code> is a{' '}
                      <code>NOT NULL</code> <code>PRIMARY KEY</code>.{' '}
                      <code>UserEmail</code> doesn't need to match a well-formed
                      e-mail account.
                    </li>
                    <li>
                      Exit by running <code>.exit</code>.
                    </li>
                  </ol>
                </details>
              </section>
            </section>
          </section>

          <section id="update-firmware">
            <header>
              <h2>
                <a className="self-link" href="#update-firmware"></a>
                <span>Update E-reader Firmware</span>
              </h2>
              <p>Get the latest official firmware right from Kobo</p>
            </header>

            <section id="how-to-install-firmware">
              <h3>
                <a className="self-link" href="#how-to-install-firmware"></a>
                <span>How to Install Offline Firmware Updates</span>
              </h3>

              <p>
                Download the appropriate ZIP file for your device from the list
                below. Then connect your Kobo e-reader to your computer using a
                USB cable. Extract the ZIP file contents into the{' '}
                <code>.kobo</code> folder of your Kobo e-reader. Finally, remove
                your Kobo e-reader with security and your e-reader will refresh
                itself and start the updating procedure automatically.
              </p>
            </section>

            <section id="firmware-downloads">
              <h3>
                <a className="self-link" href="#firmware-downloads"></a>
                <span>Firmware Downloads</span>
              </h3>

              <FirmwareDownloadList updatesByDeviceId={updatesByDeviceId} />
            </section>
          </section>
          <section id="adding-dictionaries">
            <header>
              <h2>
                <a className="self-link" href="#adding-dictionaries"></a>
                <span>Adding Dictionaries</span>
              </h2>
              <p>Get official dictionaries right from Kobo</p>
            </header>

            <section id="how-to-install-dictionaries">
              <h3>
                <a
                  className="self-link"
                  href="#how-to-install-dictionaries"
                ></a>
                <span>How to Install Dictionaries</span>
              </h3>

              <ol>
                <li>Download the appropriate ZIP files from the list below.</li>
                <li>Connect the Kobo e-reader to your PC with an USB cable.</li>
                <li>
                  Copy the <code>dicthtml.zip</code> files to the{' '}
                  <code>.kobo/dict/</code> folder on the device.{' '}
                  <em>Do not extract the ZIP files content.</em>
                </li>
                <li>Safely disconnect the e-reader from your computer.</li>
                <li>
                  In the e-reader, tap the <code>&equiv;</code> menu icon at the
                  top left corner, and navigate to <code>Settings</code> &rarr;{' '}
                  <code>Language and dictionaries</code>.
                </li>
                <li>
                  There you can read: <cite>"X dictionaries installed"</cite>.
                  Tap the <code>Edit</code> button at the right.
                </li>
                <li>
                  Enable each dictionary you have downloaded by clicking on the{' '}
                  <code>+</code> button at their side.
                </li>
              </ol>
            </section>

            <section>
              <h3 id="dictionary-downloads">
                <a className="self-link" href="#dictionary-downloads"></a>
                <span>Dictionary Downloads</span>
                {/* https://www.mobileread.com/forums/showthread.php?t=196931 */}
              </h3>

              <DictionaryDownloadList />
            </section>
          </section>
        </main>
        <footer className="app-footer">
          <span className="app-footer--credits">
            Made by{' '}
            <a
              href="http://virgulilla.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              @RoboePi
            </a>{' '}
            <span className="emoji" role="img" aria-label="Owl">
              🦉
            </span>
          </span>
          <span className="app-footer--license">
            <a
              href="https://gitlab.com/Roboe/kobo-offline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>{' '}
            (GPLv3)
          </span>
        </footer>
      </div>
    </>
  )
}