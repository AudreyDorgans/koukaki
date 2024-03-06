<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
		
  <div class="main-navigation">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-title" id ="site-title" el="home"><?php bloginfo( 'name' ); ?></a> 
    <!-- burger -->
    <div id="nav-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div class="menu-navigation">
    
  <img src="<?php echo get_template_directory_uri() . '../../foce-child/assets-images-videos/LOGO.png'; ?> " alt="logo Fleurs d'oranger & chats errants" id="logo-child-mobile">

    <nav id="nav-enfant">
      <ul>
        <li><a href="#story" id="histoire">Histoire</a></li>
        <li ><a href="#characters" id="persos">Personnages</a></li>
        <li ><a href="#place" id="lieu">Lieu</a></li>
        <li><a href="#studio" id="studio-child">Studio Koukaki</a></li>
      </ul>
    </nav><!-- #site-navigation -->
  
    <a href="#" id="lien-type-footer">STUDIO KOUKAKI</a>

  </div>


</header><!-- #masthead -->


