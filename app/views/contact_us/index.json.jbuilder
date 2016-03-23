json.array!(@contact_us) do |contact_u|
  json.extract! contact_u, :id, :email, :type, :name, :subject, :message, :user_id, :answered, :answer, :text, :parent_id, :integer, :child_id, :integer
  json.url contact_u_url(contact_u, format: :json)
end
