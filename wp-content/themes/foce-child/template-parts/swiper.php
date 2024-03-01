<article id="characters-swiper-mobile">

  <h3><span class="anim-titre-initial">Les personnages</span></h3>

  <div class="swiper mySwiper">
    <div class="swiper-wrapper">

     <?php

      $args = array(
                    'post_type' => 'characters',
                    'posts_per_page' => -1,
                    'meta_key'  => '_main_char_field',
                    'orderby'   => 'meta_value_num',
                );

      $characters_query = new WP_Query($args);


        
        while ( $characters_query->have_posts() ) {
            $characters_query->the_post();
              echo '<div class="swiper-slide">';
     
                        echo get_the_post_thumbnail( get_the_ID(), 'full' );
                        echo '<p>';
                          the_title();
                        echo'</p>';
                 
              echo '</div>';

        }
      ?>    

    </div>
  </div>
</article>
