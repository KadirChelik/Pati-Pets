document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Sayfa yenilenmesini engelle
        var targetId = this.getAttribute('href').substring(1); // Hedef bölümün ID'sini al
        var targetElement = document.getElementById(targetId); // Hedef bölümü bul
        console.log(targetElement);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); // Hedef bölüme yumuşak bir şekilde kaydır
        }
      });
    });
  });

function toggleContent() {
    const hiddenContent = document.querySelector('.hidden-content');
    const readMoreButton = document.querySelector('.read-more-button');
    const readMore = document.getElementById('read-more');
    const height = document.querySelector('.about-cats');

    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        height.style.height = '200vh';
        readMore.classList.remove('read-more-box-shadow');
        readMoreButton.innerText = 'Read Less';
        // Move the "Read Less" button to the end of the content
        hiddenContent.appendChild(readMoreButton);
    } else {
        readMore.classList.add('read-more-box-shadow');
        hiddenContent.style.display = 'none';
        height.style.height = '180vh';
        readMoreButton.innerText = 'Read More...';
        // Move the "Read More" button back to its original position
        readMore.parentElement.insertBefore(readMoreButton, hiddenContent);
    }
}

function toggleContent1() {
    const hiddenContent1 = document.querySelector('.hidden-content1');
    const readMoreButton1 = document.querySelector('.read-more-button1');
    const readMore1 = document.getElementById('read-more1');

    if (hiddenContent1.style.display === 'none') {
        hiddenContent1.style.display = 'block';
        readMore1.classList.remove('read-more-box-shadow');
        readMoreButton1.innerText = 'Read Less';
        // Move the "Read Less" button to the end of the content
        hiddenContent1.appendChild(readMoreButton1);
    } else {
        readMore1.classList.add('read-more-box-shadow');
        hiddenContent1.style.display = 'none';
        readMoreButton1.innerText = 'Read More...';
        // Move the "Read More" button back to its original position
        readMore1.parentElement.insertBefore(readMoreButton1, hiddenContent1);
    }
}


  // Get all checkbox containers
  const containers = document.querySelectorAll('.search-filter-form .container');

  // Add event listeners to each container
  containers.forEach(container => {
      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
          checkbox.addEventListener('change', () => {
              // Uncheck other checkboxes in the same container
              checkboxes.forEach(cb => {
                  if (cb !== checkbox) {
                      cb.checked = false;
                  }
              });
          });
      });
  });