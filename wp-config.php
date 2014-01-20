<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jonez_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'h8xxMB-WyZoJvfPh$OK=/JxL|miQm+~Ib(e8o9S1Qh?,4U3&*Fuo1}lHUc9,+D={');
define('SECURE_AUTH_KEY',  '!k-PX@|t{8NpvTxBro&flQ=rl-RyFL*.+-G%CCI*EH[9~-XqyX5:M-Di^7^v-=zY');
define('LOGGED_IN_KEY',    'c=OlP`3.=Ve|OS_N-_6Ml>F{J1iak2n%FzZL+~(GyL<zM1bOdq=XPqZ),/.Vuvzc');
define('NONCE_KEY',        'P(~vBEORLj:Z|Uhe5FT--3l5cQIE_]LtY<_L_P4YT? q`W[$zm^XH5@r|[~k4XcQ');
define('AUTH_SALT',        'nOOQ!zVGE=fo%ZJ2!fXQxoOU6E}9|fP 4rUd&HKLR3&BJz--$jRy?lpZSVgl[f F');
define('SECURE_AUTH_SALT', '=(Mg8|sp9{u/W}jae8-p3.%|}2<M=gm(Ut S3_a?<S=G$iAmo@Qq6Th5@/hUd$/Y');
define('LOGGED_IN_SALT',   'Sy~MH*+hd=gr;N$]uVmZ=@jXu/f=6n{yY_XrK!}%_f..^o3|~tN+N~>M#l*a~Mqf');
define('NONCE_SALT',       'w4I|iWdwe3M7Le<$hSxxyk/d>tbdSGO0wt~3P6/`|9mc9%c,(g_Rl-(M*eK[UJj^');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_jonez';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
