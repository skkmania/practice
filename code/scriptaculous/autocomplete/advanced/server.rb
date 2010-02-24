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

class LibInfo
  attr_reader :name, :mtime, :size

  def initialize(name)
    @name = File.basename(name, '.rb')
    @mtime = File.mtime(name)
    @size = File.size(name)
  end

  def <=>(other) 
    self.name <=> other.name
  end
end

template_text = File.read('suggestions.rhtml')
suggestions = ERB.new(template_text)

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

server.mount_proc('/completions') do |request, response|
  name_start = request.query['libName']
  suffix = "/#{Regexp.escape(name_start)}*.rb"
  libs = $LOAD_PATH.map { |dir|
    Dir.glob(dir + suffix, File::FNM_CASEFOLD).map { |f| LibInfo.new(f) } 
  }.flatten.sort.uniq
  response['Content-Type'] = 'text/html'
  response.body = suggestions.result(binding)
end

trap('INT') { server.shutdown }

server.start
