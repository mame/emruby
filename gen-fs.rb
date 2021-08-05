#!/usr/bin/env ruby

file_packager = File.dirname(`which emcc`.chomp) + "/tools/file_packager"
unless File.exist?(file_packager)
  file_packager = "/usr/share/emscripten/tools/file_packager"
end

files = []

files += %w(
 libexec/irb
 rbconfig.rb
 ../emruby-irb.rb@emruby-irb.rb
)

files += %w(
 monitor.rb
 ripper/core.rb
 ripper/lexer.rb
 ripper/filter.rb
 ripper/sexp.rb
 ripper.rb
).map {|f| ".ext/common/" + f }

files += %w(
 rubygems/compatibility.rb
 rubygems/defaults.rb
 rubygems/deprecate.rb
 rubygems/errors.rb
 rubygems/unknown_command_spell_checker.rb
 rubygems/exceptions.rb
 rubygems/basic_specification.rb
 rubygems/stub_specification.rb
 rubygems/text.rb
 rubygems/user_interaction.rb
 rubygems/specification_policy.rb
 rubygems/util/list.rb
 rubygems/platform.rb
 rubygems/version.rb
 rubygems/requirement.rb
 rubygems/specification.rb
 rubygems/util.rb
 rubygems/dependency.rb
 rubygems/core_ext/kernel_gem.rb
 rubygems/core_ext/kernel_require.rb
 rubygems/core_ext/kernel_warn.rb
 rubygems.rb
 rubygems/path_support.rb
 did_you_mean/version.rb
 did_you_mean/core_ext/name_error.rb
 did_you_mean/levenshtein.rb
 did_you_mean/jaro_winkler.rb
 did_you_mean/spell_checker.rb
 did_you_mean/spell_checkers/name_error_checkers/class_name_checker.rb
 did_you_mean/spell_checkers/name_error_checkers/variable_name_checker.rb
 did_you_mean/spell_checkers/name_error_checkers.rb
 did_you_mean/spell_checkers/method_name_checker.rb
 did_you_mean/spell_checkers/key_error_checker.rb
 did_you_mean/spell_checkers/null_checker.rb
 did_you_mean/tree_spell_checker.rb
 did_you_mean/spell_checkers/require_path_checker.rb
 did_you_mean/formatters/plain_formatter.rb
 did_you_mean.rb
 tsort.rb
 rubygems/request_set/gem_dependency_api.rb
 rubygems/request_set/lockfile/parser.rb
 rubygems/request_set/lockfile/tokenizer.rb
 rubygems/request_set/lockfile.rb
 rubygems/request_set.rb
 rubygems/resolver/molinillo/lib/molinillo/gem_metadata.rb
 rubygems/resolver/molinillo/lib/molinillo/delegates/specification_provider.rb
 rubygems/resolver/molinillo/lib/molinillo/errors.rb
 set.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/action.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/add_edge_no_circular.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/add_vertex.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/delete_edge.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/detach_vertex_named.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/set_payload.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/tag.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/log.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph/vertex.rb
 rubygems/resolver/molinillo/lib/molinillo/dependency_graph.rb
 rubygems/resolver/molinillo/lib/molinillo/state.rb
 rubygems/resolver/molinillo/lib/molinillo/modules/specification_provider.rb
 rubygems/resolver/molinillo/lib/molinillo/delegates/resolution_state.rb
 rubygems/resolver/molinillo/lib/molinillo/resolution.rb
 rubygems/resolver/molinillo/lib/molinillo/resolver.rb
 rubygems/resolver/molinillo/lib/molinillo/modules/ui.rb
 rubygems/resolver/molinillo/lib/molinillo.rb
 rubygems/resolver/molinillo.rb
 rubygems/resolver/activation_request.rb
 rubygems/resolver/conflict.rb
 rubygems/resolver/dependency_request.rb
 rubygems/resolver/requirement_list.rb
 rubygems/resolver/stats.rb
 rubygems/resolver/set.rb
 rubygems/resolver/api_set.rb
 rubygems/resolver/composed_set.rb
 rubygems/resolver/best_set.rb
 rubygems/resolver/current_set.rb
 rubygems/resolver/git_set.rb
 rubygems/resolver/index_set.rb
 rubygems/resolver/installer_set.rb
 rubygems/resolver/lock_set.rb
 rubygems/resolver/vendor_set.rb
 rubygems/resolver/source_set.rb
 rubygems/resolver/specification.rb
 rubygems/resolver/spec_specification.rb
 rubygems/resolver/api_specification.rb
 rubygems/resolver/git_specification.rb
 rubygems/resolver/index_specification.rb
 rubygems/resolver/installed_specification.rb
 rubygems/resolver/local_specification.rb
 rubygems/resolver/lock_specification.rb
 rubygems/resolver/vendor_specification.rb
 rubygems/resolver.rb
 uri/version.rb
 uri/rfc2396_parser.rb
 uri/rfc3986_parser.rb
 uri/common.rb
 uri/generic.rb
 uri/file.rb
 uri/ftp.rb
 uri/http.rb
 uri/https.rb
 uri/ldap.rb
 uri/ldaps.rb
 uri/mailto.rb
 uri.rb
 rubygems/source/git.rb
 rubygems/source/installed.rb
 rubygems/source/specific_file.rb
 rubygems/source/local.rb
 rubygems/source/lock.rb
 rubygems/source/vendor.rb
 rubygems/source.rb
 timeout.rb
 forwardable/impl.rb
 forwardable.rb
 reline/version.rb
 reline/config.rb
 reline/key_actor/base.rb
 reline/key_actor/emacs.rb
 reline/key_actor/vi_command.rb
 reline/key_actor/vi_insert.rb
 reline/key_actor.rb
 reline/key_stroke.rb
 reline/kill_ring.rb
 reline/unicode/east_asian_width.rb
 reline/unicode.rb
 delegate.rb
 fileutils.rb
 tmpdir.rb
 tempfile.rb
 reline/line_editor.rb
 reline/history.rb
 reline/ansi.rb
 reline/general_io.rb
 reline.rb
 irb/init.rb
 irb/workspace.rb
 irb/inspector.rb
 irb/src_encoding.rb
 irb/magic-file.rb
 irb/completion.rb
 irb/input-method.rb
 irb/output-method.rb
 irb/context.rb
 irb/extend-command.rb
 irb/ruby-lex.rb
 irb/locale.rb
 irb/color.rb
 irb/version.rb
 irb/easter-egg.rb
 irb.rb
 rubygems/bundler_version_finder.rb
 prettyprint.rb
 pp.rb
 irb/color_printer.rb
 irb/ext/save-history.rb
 irb/lc/error.rb
).map {|f| "lib/" + f }

Dir.chdir("ruby") do
  system(
    file_packager,
    "../app/public/fs.data",
    "--preload", *files,
    "--js-output=../app/public/fs.js",
  exception: true)
end
