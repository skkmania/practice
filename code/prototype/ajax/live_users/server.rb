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

full_template = ERB.new(File.read('index.rhtml'))
list_template = ERB.new(File.read('users.rhtml'))

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

ALL_USERS = [
  'Dan Webb', 'Élodie Jaubert', 'Justin Palmer', 'Mislav Marohnic',
  'Scott Raymond', 'Andrew Dupont', 'Seth Dillingham'
]

$users = ALL_USERS.select { rand(4) == 0 }.sort

server.mount_proc('/home') do |request, response|
  response['Content-Type'] = 'text/html; charset=UTF-8'
  users_list = list_template.result(binding)
  response.body = full_template.result(binding)
end

server.mount_proc('/users') do |request, response|
  $users.reject! { rand(4) == 0 }
  $users.concat(ALL_USERS.select { rand(4) == 0 }).sort!.uniq!
  response['Content-Type'] = 'text/html; charset=UTF-8'
  response.body = list_template.result(binding)
end

trap('INT') { server.shutdown }

server.start
