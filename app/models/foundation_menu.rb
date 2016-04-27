class FoundationMenu < Refinery::Pages::MenuPresenter

  private
  def render_menu(items)
    content_tag(:section, :id => "nav", :class => 'top-bar-section') do
      render_menu_items(items)
    end
  end

  def render_menu_items(menu_items, parent = true)
    if menu_items.present?
      content_tag(:ul, class: ul_class(parent)) do
        menu_items.each_with_index.inject(ActiveSupport::SafeBuffer.new) do |buffer, (item, index)|
          buffer << render_menu_item(item, index)
        end
      end
    end
  end

  def ul_class(parent)
    parent ? 'right' : 'dropdown'
  end

  def render_menu_item(menu_item, index)
    content_tag(:li, :class => menu_item_css(menu_item, index)) do
      buffer = ActiveSupport::SafeBuffer.new
      buffer << link_to(menu_item.title, context.refinery.url_for(menu_item.url))
      buffer << render_menu_items(menu_item_children(menu_item), false)
      buffer
    end
  end

  def menu_item_css(menu_item, index)
    css = []

    css << selected_css if selected_item_or_descendant_item_selected?(menu_item)
    css << first_css if index == 0
    css << last_css if index == menu_item.shown_siblings.length
    css << 'has-dropdownd' if menu_item.children.any? && within_max_depth?(menu_item)

    css.reject(&:blank?).presence
  end
end
#Raw
