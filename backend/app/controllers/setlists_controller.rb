class SetlistsController < ApplicationController
  require 'net/http'
  require 'cgi'

  def search
    artist = params[:artist]
    url = "https://api.setlist.fm/rest/1.0/search/setlists?artistName=#{CGI.escape(artist)}"

    uri = URI(url)
    request = Net::HTTP::Get.new(uri)
    request["x-api-key"] = Rails.application.credentials.dig(:setlistfm, :api_key)
    request["Accept"] = "application/json"

    response = Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |http| http.request(request) }
    
    render json: JSON.parse(response.body)
  end
end
