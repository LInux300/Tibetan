init_modal_dialogs = function(){
  $('a[href*="dialog=true"]').not('#dialog_container a').each(function(i, anchor) {
    $(anchor).data({
      'dialog-width': parseInt($($(anchor).attr('href').match("width=([0-9]*)")).last().get(0), 10)||928
      , 'dialog-height': parseInt($($(anchor).attr('href').match("height=([0-9]*)")).last().get(0), 10)||473
      , 'dialog-title': ($(anchor).attr('title') || $(anchor).attr('name') || $(anchor).html() || null)
    }).attr('href', $(anchor).attr('href').replace(/(&(amp;)?|\?)(dialog=true|(width|height)=\d+)/g, '')
                                          .replace(/(\/[^&\?]*)&(amp;)?/, '$1?'))
    .click(function(e){
      $anchor = $(this);
      iframe_src = (iframe_src = $anchor.attr('href'))
                   + (iframe_src.indexOf('?') > -1 ? '&' : '?')
                   + 'app_dialog=true&dialog=true';

      iframe = $("<iframe id='dialog_iframe' frameborder='0' marginheight='0' marginwidth='0' border='0'></iframe>");
      iframe.dialog({
        title: $anchor.data('dialog-title')
        , modal: true
        , resizable: false
        , autoOpen: true
        , width: $anchor.data('dialog-width')
        , height: $anchor.data('dialog-height')
        , open: onOpenDialog
        , close: onCloseDialog
      });

      iframe.attr('src', iframe_src);
      e.preventDefault();
    });
  });
};
