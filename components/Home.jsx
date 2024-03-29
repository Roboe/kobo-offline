import DictionaryDownloadList from './DictionaryDownloadList.jsx'
import FirmwareDownloadList from './FirmwareDownloadList.jsx'
import Layout from './Layout.jsx'
import Section from './Section.jsx'
import TableOfContents from './TableOfContents.jsx'

const TOC = {
  FIRST_BOOT: {
    id: 'first-boot',
    title: 'First boot',
    lead: 'Avoid being forced to connect your e-reader to the internet and to create a Kobo account',
    SKIP_REGISTRATION: {
      id: 'skip-device-registration',
      title: 'Skip device registration',
      AVERAGE_USERS: {
        id: 'easier-option-for-average-users',
        title: 'Easier option for average users',
      },
      TECH_SAVVY_USERS: {
        id: 'straightforward-option-for-tech-savvy-users',
        title: 'Straightforward option for tech-savvy users',
      },
    },
  },
  UPDATE_FIRMWARE: {
    id: 'update-firmware',
    title: 'Update e-reader firmware',
    lead: 'Get the latest official firmware right from Kobo',
    HOW_TO: {
      id: 'how-to-install-firmware',
      title: 'How to install offline firmware updates',
    },
    DOWNLOADS: {
      id: 'firmware-downloads',
      title: 'Firmware downloads',
    },
  },
  ADD_DICTIONARIES: {
    id: 'adding-dictionaries',
    title: 'Adding dictionaries',
    lead: 'Get official dictionaries right from Kobo',
    HOW_TO: {
      id: 'how-to-install-dictionaries',
      title: 'How to install dictionaries',
    },
    DOWNLOADS: {
      id: 'dictionary-downloads',
      title: 'Dictionary downloads',
    },
  },
}

export default function Home({
  dictionaries,
  devices,
  updatesByDeviceId,
  lastCheckedUTCDate,
}) {
  const firmwareListUpdateDate = new Date(lastCheckedUTCDate)
  return (
    <>
      <Layout>
        <TableOfContents toc={TOC} />
        <Section headingLevel={2} tocEntry={TOC.FIRST_BOOT}>
          <Section.Content>
            {/* https://www.darkcoding.net/misc/kobo-ereader-touch-on-ubuntu-linux/ */}
            <p>
              When you start a Kobo e-reader for the first time, it{' '}
              <strong>blocks</strong> any interaction until you run the setup
              software (Win/Mac only) or connect the device to a WiFi point.
              This initial setup will do two things: it will force you to create
              a kobobooks.com account, and it will update your device&apos;s
              firmware.
            </p>

            <p>
              Some users would rather not connect their devices to the internet
              or create online accounts because of <strong>privacy</strong>{' '}
              concerns, while others may not be interested in buying e-books on
              Kobo&apos;s online marketplace. Furthermore, there&apos;s no setup
              software for other OSes like <strong>Linux-based ones</strong>, so
              you&apos;re left alone with the WiFi option.
            </p>
          </Section.Content>
          <Section headingLevel={3} tocEntry={TOC.FIRST_BOOT.SKIP_REGISTRATION}>
            <Section.Content>
              {/* https://www.mobileread.com/forums/showthread.php?t=171664 */}

              <p>
                There is a simple way to by-pass the above mentioned
                restriction. The Kobo reader will skip it whenever a user is
                detected by its firmware. We could achieve this by editing the
                internal device database. There are two ways to do it: one for
                average users, and other for tech savvy ones.
              </p>
            </Section.Content>
            <Section
              headingLevel={4}
              tocEntry={TOC.FIRST_BOOT.SKIP_REGISTRATION.AVERAGE_USERS}
            >
              <Section.Content>
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
                    Click on the <q className="gui">Browse Data</q> tab and
                    select the <code>user</code> table in the dropdown menu.
                  </li>
                  <li>
                    Click on the <q className="gui">New Record</q> button to
                    register a new user. A new row will be added. Then you can
                    edit each cell value by double-clicking on them.
                  </li>
                  <li>
                    Enter a random name (e.g. <q>Foo</q>) in the{' '}
                    <code>UserDisplayName</code> cell.
                  </li>
                  <li>
                    Enter a random e-mail address (e.g. <q>bar@baz.qux</q>) in
                    the <code>UserEmail</code> cell. It doesn&apos;t need to
                    match the standard e-mail address format.
                  </li>
                  <li>
                    Save the changes by clicking <q className="gui">File</q>{' '}
                    &rarr; <q className="gui">Save changes</q>.
                  </li>
                </ol>
              </Section.Content>
            </Section>

            <Section
              headingLevel={4}
              tocEntry={TOC.FIRST_BOOT.SKIP_REGISTRATION.TECH_SAVVY_USERS}
            >
              <Section.Collapsed summary="Assuming you already have a command-line shell for SQLite 3&hellip;">
                <Section.Content>
                  <ol>
                    <li>
                      Open the database by running{' '}
                      <code>$ sqlite3 ./.kobo/KoboReader.sqlite</code> in a
                      terminal (Linux, Mac) or command prompt (Windows).
                    </li>
                    <li>
                      Add a new record to the <code>user</code> table by running
                      the following query:{' '}
                      <pre className="notification is-dark">
                        <code>
                          INSERT INTO &apos;user&apos; (UserID, UserKey,
                          UserDisplayName, UserEmail)
                          <br />
                          VALUES (3, &apos;&apos;, &apos;Foo&apos;,
                          &apos;bar@baz.qux&apos;);
                        </code>
                      </pre>
                      You can change those values. <code>UserID</code> is a{' '}
                      <code>NOT NULL</code> <code>PRIMARY KEY</code>.{' '}
                      <code>UserEmail</code> doesn&apos;t need to match a
                      well-formed e-mail account.
                    </li>
                    <li>
                      Exit by running <code>.exit</code>.
                    </li>
                  </ol>
                </Section.Content>
              </Section.Collapsed>
            </Section>
          </Section>
        </Section>

        <Section headingLevel={2} tocEntry={TOC.UPDATE_FIRMWARE}>
          <Section headingLevel={3} tocEntry={TOC.UPDATE_FIRMWARE.HOW_TO}>
            <Section.Content>
              <p>
                Download the appropriate ZIP file for your device from the list
                below. Then connect your Kobo e-reader to your computer using a
                USB cable. Extract the ZIP file contents into the{' '}
                <code>.kobo</code> folder of your Kobo e-reader. Finally, remove
                your Kobo e-reader with security and your e-reader will refresh
                itself and start the updating procedure automatically.
              </p>
            </Section.Content>
          </Section>

          <Section headingLevel={3} tocEntry={TOC.UPDATE_FIRMWARE.DOWNLOADS}>
            <Section.Content>
              <p className="block">
                (List was last updated on:{' '}
                <time datetime={firmwareListUpdateDate.toISOString()}>
                  {firmwareListUpdateDate.toLocaleDateString()}
                </time>
                )
              </p>
            </Section.Content>
            <FirmwareDownloadList
              devices={devices}
              updatesByDeviceId={updatesByDeviceId}
            />
          </Section>
        </Section>
        <Section headingLevel={2} tocEntry={TOC.ADD_DICTIONARIES}>
          <Section headingLevel={3} tocEntry={TOC.ADD_DICTIONARIES.HOW_TO}>
            <Section.Content>
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
                  In the e-reader, tap the <q className="gui">&equiv;</q> menu
                  icon at the top left corner, and navigate to{' '}
                  <q className="gui">Settings</q> &rarr;{' '}
                  <q className="gui">Language and dictionaries</q>.
                </li>
                <li>
                  There you can read: <q>X dictionaries installed</q>. Tap the
                  <q>Edit</q> button at the right.
                </li>
                <li>
                  Enable each dictionary you have downloaded by clicking on the{' '}
                  <q className="gui">+</q> button at their side.
                </li>
              </ol>
            </Section.Content>
          </Section>

          <Section headingLevel={3} tocEntry={TOC.ADD_DICTIONARIES.DOWNLOADS}>
            {/* https://www.mobileread.com/forums/showthread.php?t=196931 */}
            <DictionaryDownloadList dictionaries={dictionaries} />
          </Section>
        </Section>
      </Layout>
    </>
  )
}
