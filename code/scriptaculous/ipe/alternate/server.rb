#! /usr/bin/env ruby
#---
# Excerpted from "Prototype and script.aculo.us",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material, 
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose. 
# Visit http://www.pragmaticprogrammer.com/titles/cppsu for more book information.
#---

require 'cgi'
require 'erb'
require 'webrick'
include WEBrick

template_text = File.read('index.rhtml')
template = ERB.new(template_text)

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

source = 'Some basic text'

def xhtml_convert(text) 
  '<p>' +
  text.gsub(/(?:\r|\n){2,}/, "</p>\n<p>").gsub('%%%', "<br/>\n") +
  '</p>'
end

server.mount_proc('/home') do |request, response|
  response['Content-Type'] = 'text/html'
  xhtmlVersion = xhtml_convert(source)
  response.body = template.result(binding)
end

server.mount_proc('/source') do |request, response|
  sleep 2 # Darn we're slow...
  response['Content-Type'] = 'text/plain'
  response.body = source
end

server.mount_proc('/update') do |request, response|
  sleep 2 # Darn we're slow...
  source = request.query['value']
  response.body = xhtml_convert(source)
end

trap('INT') { server.shutdown }

server.start
