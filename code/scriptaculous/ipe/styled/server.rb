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

editableHTMLs = [
  'Andrew Dupont',
  'Mislav Marohnić',
  'Thomas Fuchs',
  'Tobie Langel'
]

server.mount_proc('/home') do |request, response|
  response['Content-Type'] = 'text/html'
  response.body = template.result(binding)
end

server.mount_proc('/update') do |request, response|
  sentContent = request.query['value']
  request.query['editorId'] =~ /^freeZone(\d+)$/
  index = $1.to_i - 1
  editableHTMLs[index] = sentContent
  sleep 2 if index == 3 # Simulate lag so we can see the custom text...
  response.body = sentContent
end

trap('INT') { server.shutdown }

server.start
