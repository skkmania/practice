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

LABELS = [
  { :title => 'Some widget',
    :text => 'This is a widget' },
  { :title => 'Some other widget',
    :text => "This is another widget.\nIt's just bigger, you know." },
  { :title => 'Yet another widget',
    :text => 'This is a third widget.  It\'s actually quite small.' }
]

$geometry = [
  { :left => 20, :top => 100, :zIndex => 1},
  { :left => 220, :top => 160, :zIndex => 2},
  { :left => 400, :top => 130, :zIndex => 3}
]

server.mount_proc('/home') do |request, response|
  response['Content-Type'] = 'text/html'
  response.body = template.result(binding)
end

server.mount_proc('/geometry') do |request, response|
  params = request.query
  $geometry.each_with_index do |pos, index| 
    [:top, :left, :zIndex].each { |key|
      pos[key] = params[key.to_s + index.to_s].to_i
    }
  end
  response.body = 'OK.'
end

trap('INT') { server.shutdown }

server.start
