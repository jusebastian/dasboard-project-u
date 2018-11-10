$.fn.pageMe = function(opts) {
  var $this = this,
    defaults = {
      perPage: 3,
      showPrevNext: false,
      hidePageNumbers: false
    },
    settings = $.extend(defaults, opts);

  var listElement = $this.find('#myPager');
  var perPage = settings.perPage;
  var children = listElement.children();
  var pager = $('.pager');

  if (typeof settings.childSelector != "undefined") {
    children = listElement.find(settings.childSelector);
  }

  if (typeof settings.pagerSelector != "undefined") {
    pager = $(settings.pagerSelector);
  }

  var numItems = children.size();
  var numPages = Math.ceil(numItems / perPage);

  pager.data("curr", 0);

  if (settings.showPrevNext) {
    $('<li class="page-item"><a href="#" class="prev_link" aria-label="Previous">' +
      '<span aria-hidden="true">&laquo;</span>' +
      '<span class="sr-only">Previous</span>'
      + '</a></li>').append(pager);
  }

  var curr = 0;
  while (numPages > curr && (settings.hidePageNumbers == false)) {
    $('<li class="page-item"><a href="#" class="page_link">' + (curr + 1) + '</a></li>').append(pager);
    curr++;
  }

  if (settings.showPrevNext) {
    $('<li class="page-item"><a href="#" class="next_link" aria-label="Next">' +
      '<span aria-hidden="true">&raquo;</span>' +
      '<span class="sr-only">Next</span>' +
      + '</a></li>').append(pager);
  }

  pager.find('.page_link:first').addClass('active');
  pager.find('.prev_link').hide();
  if (numPages <= 1) {
    pager.find('.next_link').hide();
  }
  pager.children().eq(1).addClass("active");

  children.hide();
  children.slice(0, perPage).show();

  pager.find('li .page_link').click(function () {
    var clickedPage = $(this).html().valueOf() - 1;
    goTo(clickedPage, perPage);
    return false;
  });
  pager.find('li .prev_link').click(function () {
    previous();
    return false;
  });
  pager.find('li .next_link').click(function () {
    next();
    return false;
  });

  function previous() {
    var goToPage = parseInt(pager.data("curr")) - 1;
    goTo(goToPage);
  }

  function next() {
    goToPage = parseInt(pager.data("curr")) + 1;
    goTo(goToPage);
  }

  function goTo(page) {
    var startAt = page * perPage,
      endOn = startAt + perPage;

    children.css('display', 'none').slice(startAt, endOn).show();

    if (page >= 1) {
      pager.find('.prev_link').show();
    }
    else {
      pager.find('.prev_link').hide();
    }

    if (page < (numPages - 1)) {
      pager.find('.next_link').show();
    }
    else {
      pager.find('.next_link').hide();
    }

    pager.data("curr", page);
    pager.children().removeClass("active");
    pager.children().eq(page + 1).addClass("active");

  }
};

$(document).on('ready', function () {

  $('#resultadoBusqueda').pageMe({ pagerSelector: '#myPager', showPrevNext: true, hidePageNumbers: false, perPage: 5 });
  console.log('estoy acà');
});



