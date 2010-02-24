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

template_text = File.read('results.rhtml')
template = ERB.new(template_text)

server = HTTPServer.new(:Port => 8042)
server.mount('/', HTTPServlet::FileHandler, '.')

def get_search_results(q)
  suffix = "/*#{Regexp.escape(q)}*.rb"
  $LOAD_PATH.map { |dir|
    Dir.glob(dir + suffix, File::FNM_CASEFOLD).map { |f|
      File.basename(f, '.rb')
    }
  }.flatten.sort.uniq
end

server.mount_proc('/search') do |request, response|
  q = request.query['q'] || ''
  results = get_search_results(q)
  response['Content-Type'] = 'text/html'
  response.body = template.result(binding)
end

trap('INT') { server.shutdown }

server.start
