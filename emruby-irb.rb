def $stdout.tty? = true

require "irb"

ENV["TERM"] = "xterm"
IRB.start(__FILE__)
