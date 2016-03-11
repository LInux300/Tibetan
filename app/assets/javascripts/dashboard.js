var attributes = [];
for (i = 0; i < 2; i++) {
  attributes.push(
    {
      "name" : I18n.t('view.attributes.'+ i +'_atr.name'),
      'effects': [
        {"element": I18n.t('view.attributes.'+ i +'_atr.1_element'),
        "effect": I18n.t('view.attributes.'+ i +'_atr.1_effect'),
        'movement': I18n.t('view.attributes.'+ i +'_atr.1_movement')},
        {"element": I18n.t('view.attributes.'+ i +'_atr.2_element'),
        "effect": I18n.t('view.attributes.'+ i +'_atr.2_effect'),
        'movement': I18n.t('view.attributes.'+ i +'_atr.2_movement')},
        {"element": I18n.t('view.attributes.'+ i +'_atr.3_element'),
        "effect": I18n.t('view.attributes.'+ i +'_atr.3_effect'),
        'movement': I18n.t('view.attributes.'+ i +'_atr.3_movement')},
      ]
    }
  )
};

$.each(attributes, function(i, attribute) {
  console.log(attribute.name);
  $.each(attribute.effects, function(i2, effect) {
    console.log(effect.element);
  });
});
