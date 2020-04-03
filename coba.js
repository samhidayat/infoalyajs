// Colors
$background-color: #ece0e8;
$color-primary-light: #1e0b36;
$color-primary-dark: #ca3782;
$color-black: #000;
$color-gray-dark: #aaa;
$color-gray-light: #eee;
$color-white: #fff;

// Mixins
@mixin absCenter {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
}

@mixin flexCenter {
 flex-flow: row;
 align-items: center;
 justify-content: center;
}

@mixin respond($breakpoint) {
 @if $breakpoint == phone {
  @media (max-width: 37.5em) {
   @content;
  } // < 600px
 }
 @if $breakpoint == tab-port {
  @media (max-width: 56.25em) {
   @content;
  } // < 900px
 }
 @if $breakpoint == tab-land {
  @media (max-width: 75em) {
   @content;
  } // < 1200px
 }
 @if $breakpoint == big-desktop {
  @media (min-width: 112.5em) {
   @content;
  } // > 1800px
 }
}

/* Reset */
*,
*::after,
*::before {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html {
 // 10px as 1rem.
 font-size: 62.5%;

 @include respond(tab-land) {
  // width < 1200?
  font-size: 56.25%; // 1rem = 9px, 9/16 = 56.25
 }
 @include respond(tab-port) {
  // width < 900?
  font-size: 50%; // 1rem = 8px, 8/16 = 50
 }
 @include respond(big-desktop) {
  font-size: 75%; // 1 rem = 12px, 12/16 = 75
 }
}

body {
 height: 100vh;
 background-color: $background-color;
}

.artboard {
 display: flex;
 @include flexCenter;
 padding: 4rem;
 height: 100%;
 position: relative;

 @include respond(phone) {
  padding: 1rem;
 }
}

.card {
 flex: initial;
 position: relative;
 height: 52rem;
 width: 48rem;
 -moz-perspective: 200rem;
 perspective: 200rem;
 margin: 2rem;

 &__side {
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden; /* We don't want to see the back part of the element. */
  backface-visibility: hidden; /* We don't want to see the back part of the element. */
  border-radius: 3px;
  overflow: hidden; /* The image is overflowing the parent. */
  box-shadow: 0 2rem 6rem rgba($color-black, 0.15);

  &--front {
   background-image: linear-gradient(
     to right bottom,
     rgba($color-primary-light, 0.65),
     rgba($color-primary-dark, 0.7)
    ),
    url(https://cdn.spacetelescope.org/archives/images/screen/heic0406a.jpg);
  }

  &--back {
   background-color: $color-white;
   transform: rotateY(180deg);
  }
 }

 &:hover &__side--back {
  transform: rotateY(0);
 }
 &:hover &__side--front {
  transform: rotateY(-180deg);
 }

 // Front side of the card
 &__theme {
  @include absCenter;
  top: 54%;
  width: 90%;
  text-align: center;
 }

 &__theme-box {
  color: $color-white;
  margin-bottom: 8rem;
 }

 &__subject {
  font-family: "Inconsolata", monospace;
  letter-spacing: 0.8rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
 }

 &__title {
  font-family: "VT323", monospace;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 100;
 }
 
 // Back side of the card
 &__cover {
  position: relative;
  background-size: cover;
  height: 14rem;
  // background-blend-mode: screen;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: linear-gradient(
    to top right,
    rgba($color-primary-light, 0.65),
    rgba($color-primary-dark, 0.65)
   ),
   url(https://cdn.spacetelescope.org/archives/images/screen/heic0406a.jpg);
 }

 &__heading {
  text-align: center;
  color: $color-white;
  @include absCenter;
  width: 75%;
 }

 &__heading-span {
  font-family: "VT323", monospace;
  font-size: 4.2rem;
  font-weight: 300;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  color: $color-white;
 }

 &__details {
  font-family: "Inconsolata", monospace;
  padding: 4rem 2rem;
  ul {
   list-style: none;
   width: 80%;
   margin: 0 auto;

   li {
    text-align: center;
    font-size: 1.8rem;
    padding: 1rem;

    &:not(:last-child) {
     border-bottom: 1px solid $color-gray-light;
    }
   }
  }
 }

 // Responsivity
 @media only screen and (max-width: 37.5em), only screen and (hover: none) {
  height: auto;
  border-radius: 3px;
  background-color: $color-white;
  box-shadow: 0 2rem 6rem rgba($color-black, 0.15);

  &__side {
   height: auto;
   position: relative;
   box-shadow: none;

   &--front {
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
   }

   &--back {
    transform: rotateY(0);
   }
  }

  &:hover &__side--front {
   transform: rotateY(0);
  }

  &__details {
   padding: 3rem 2rem;
  }

  // Front side responsive styling
  &__theme {
   position: relative;
   top: 0;
   left: 0;
   transform: translate(0);
   width: 100%;
   padding: 5rem 4rem 1.5rem 4rem;
   text-align: right;
  }

  &__theme-box {
   margin-bottom: 1.5rem;
  }

  &__title {
   font-size: 4rem;
  }
 }
}
