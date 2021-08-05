class DummyIO
  def write(str)
    str.bytes do |ch|
      emscripten_run_script_int("Module.test_func(#{ ch })")
    end
  end

  def tty?
    true
  end
end

#$stdout = $stderr = DummyIO.new

def $stdout.tty? = true

$LOAD_PATH << "/"
$LOAD_PATH << "/lib"
$LOAD_PATH << "/.ext/common"

require "irb"

ENV["TERM"] = "xterm"
IRB.start(__FILE__)
