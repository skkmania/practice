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

template_text = File.read('task.rhtml')
task = ERB.new(template_text)
taskId = 0

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

server.mount_proc('/tasks') do |request, response|
  params = CGI::parse(request.body)
  text = CGI::escapeHTML(params['text'][0])
  taskId += 1
  # Simulate random processing time (0-2 seconds)
  sleep 2*rand
  # Return XHTML fragment
  response['Content-Type'] = 'text/html'
  response.body = task.result(binding)
end

trap('INT') { server.shutdown }

server.start
