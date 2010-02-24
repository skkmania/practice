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
require 'webrick'
include WEBrick

sendError = false

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

server.mount_proc('/user/update') do |request, response|
  response['Content-Type'] = 'text/html'
  if sendError
    response['X-Status'] = 'error'
    response.body = 'What do you think you are doing?!'
  else
    response['X-Status'] = 'ok'
    response.body = 'User updated.  Doing just fine...'
  end
  sendError = !sendError
end

trap('INT') { server.shutdown }

server.start
