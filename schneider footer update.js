{% if ufcc_staging %}

<script>
const el = document.getElementsByClassName("left")[0].getElementsByTagName("p")[0].getElementsByTagName("a")[0];
$(el).html('Sustainability Business');

const el2 = document.getElementsByClassName("footer-social")[0].getElementsByTagName("a")[1];
el2.setAttribute("href","https://twitter.com/SESustainable");

const el3 = document.getElementsByClassName("footer-social")[0].getElementsByTagName("a")[2];
el3.setAttribute("href","https://www.facebook.com/SESustainable");

/*
var el4 = document.querySelector(".footer-social");
do {
  el4[i].innerHTML = '<li> <a href="https://www.youtube.com/playlist?list=PLa7UGrWOTyjkm42do7NsDD2YMjYHwXejw"> <div class="social-box youtube"> <i class="yo yo-youtube" aria-hidden="true"></i> </div> </a> </li>';
}
while (el4.length<=4);
*/
</script>
{% endif %}
