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

options = %w(Seth Corinne Lauren)
content = options[0]

server.mount_proc('/home') do |request, response|
  response['Content-Type'] = 'text/html'
  response.body = template.result(binding)
end

server.mount_proc('/names') do |request, response|
  sleep 1 # Simulate slow option fetching...
  response['Content-Type'] = 'text/plain' # No need for auto JS eval...
  response.body = '[' + options.map { |s| s.inspect() }.join(', ') + ']'
end

server.mount_proc('/update') do |request, response|
  sleep 1 # Simulate slow option saving...
  content = request.query['value']
  response.body = content
end

trap('INT') { server.shutdown }

server.start
