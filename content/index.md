---
---

<section id="first-boot">
<header>

## <a class="self-link" href="#first-boot"></a> First boot
<!-- TODO: self-link class -->
<!-- https://www.darkcoding.net/misc/kobo-ereader-touch-on-ubuntu-linux/ -->

Avoid being forced to connect your e-reader to the internet and to create a Kobo account

</header>

When you start a Kobo e-reader for the first time, it **blocks** any interaction until you run the setup software (Win/Mac only) or connect the device to a WiFi point. This initial setup will do two things: it will force you to create a `kobobooks.com` account, and it will update your device's firmware.

Some users would rather not connect their devices to the internet or create online accounts because of **privacy** concerns, while others may not be interested in buying e-books on Kobo's online marketplace. Furthermore, there's no setup software for other OSes like **GNU/Linux**, so you're left alone with the WiFi option.

<section id="skip-device-registration">

### <a class="self-link" href="#skip-device-registration"></a> Skip device registration
<!-- https://www.mobileread.com/forums/showthread.php?t=171664 -->

There is a simple way to by-pass the above mentioned restriction. The Kobo reader will skip it whenever a `user` is detected by its firmware. We could achieve this by editing the internal device database. There are two ways to do it: one for average users, and other for tech savvy ones.

<section id="easier-option-for-average-users">

#### <a class="self-link" href="#easier-option-for-average-users"></a> Easier option for average users

1. Install [DB Browser for SQLite](https://sqlitebrowser.github.io/sqlitebrowser/) and open the `KoboReader.sqlite` file that you will find in the `.kobo/` directory.
2. Click on the `Browse Data` tab and select the `user` table in the dropdown menu.
3. Click on the `New Record` button to register a new user. A new row will be added. Then you can edit each cell value by double-clicking on them.
4. Enter a random name (e.g. "Foo") in the `UserDisplayName` cell.
5. Enter a random e-mail address (e.g. "bar@baz.qux") in the `UserEmail` cell. It doesn't need to match the standard e-mail address format.
6. Save the changes by clicking `File` &rarr; `Save changes`.

</section>

<section id="straightforward-option-for-tech-savvy-users">

#### <a class="self-link" href="#straightforward-option-for-tech-savvy-users"></a> Straightforward option for tech savvy users

<details>
<summary>Assuming you already have a command-line shell for SQLite 3&hellip;</summary>

1. Open the database by running `$ sqlite3 ./.kobo/KoboReader.sqlite` in a terminal (Linux, Mac) or command prompt (Windows).
2. Add a new record to the `user` table by running the following query:
   ```
   INSERT INTO 'user' (UserID, UserKey, UserDisplayName, UserEmail)<br />VALUES (3, '', 'Foo', 'bar@baz.qux');
   ```
   You can change those values. `UserID` is a `NOT NULL` `PRIMARY KEY`. `UserEmail` doesn't need to match a well-formed e-mail account.
3. Exit by running `.exit`.

</details>
</section>
</section>
</section>

<section id="update-firmware">
<header>

## <a class="self-link" href="#update-firmware"></a> Update E-reader Firmware

Get the latest official firmware right from Kobo

</header>

<section id="how-to-install-firmware">

### <a class="self-link" href="#how-to-install-firmware"></a> How to Install Offline Firmware Updates

Download the appropriate ZIP file for your device from the list below. Then connect your Kobo e-reader to your computer using a USB cable. Extract the ZIP file contents into the `.kobo` folder of your Kobo e-reader. Finally, remove your Kobo e-reader with security and your e-reader will refresh itself and start the updating procedure automatically.

</section>

<section id="firmware-downloads">

### <a class="self-link" href="#firmware-downloads"></a> Firmware Downloads

{{< firmware-downloads >}}

</section>
</section>

<section id="adding-dictionaries">
<header>

## <a class="self-link" href="#adding-dictionaries"></a> Adding Dictionaries

Get official dictionaries right from Kobo

</header>

<section id="how-to-install-dictionaries">

### <a class="self-link" href="#how-to-install-dictionaries"></a> How to Install Dictionaries

1. Download the appropriate ZIP files from the list below.
2. Connect the Kobo e-reader to your PC with an USB cable.
3. Copy the `dicthtml.zip` files to the `.kobo/dict/` folder on the device. _Do not extract the ZIP files content._
4. Safely disconnect the e-reader from your computer.
5. In the e-reader, tap the `&equiv;` menu icon at the top left corner, and navigate to `Settings` &rarr; `Language and dictionaries`.
6. There you can read: <cite>"X dictionaries installed"</cite>. Tap the `Edit` button at the right.
7. Enable each dictionary you have downloaded by clicking on the `+` button at their side.

</section>

<section id="dictionary-downloads">

### <a class="self-link" href="#dictionary-downloads"></a> Dictionary Downloads
<!-- https://www.mobileread.com/forums/showthread.php?t=196931 -->

{{< dictionary-downloads >}}

</section>
</section>