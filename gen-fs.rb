#!/usr/bin/env ruby

file_packager = File.dirname(`which emcc`.chomp) + "/tools/file_packager"
unless File.exist?(file_packager)
  file_packager = File.dirname(File.dirname(File.realpath(`which emcc`.chomp))) + "/libexec/tools/file_packager"
  unless File.exist?(file_packager)
    file_packager = "/usr/share/emscripten/tools/file_packager"
  end
end

files = []

files += %w(
 libexec/irb
 rbconfig.rb
 ../emruby-irb.rb@emruby-irb.rb
 ../reline-terminfo.rb@lib/reline/terminfo.rb
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
 error_highlight/base.rb
 error_highlight/core_ext.rb
 error_highlight/formatter.rb
 error_highlight/version.rb
 error_highlight.rb
 did_you_mean/core_ext/name_error.rb
 did_you_mean/did_you_mean.gemspec
 did_you_mean/experimental.rb
 did_you_mean/formatter.rb
 did_you_mean/formatters/plain_formatter.rb
 did_you_mean/formatters/verbose_formatter.rb
 did_you_mean/jaro_winkler.rb
 did_you_mean/levenshtein.rb
 did_you_mean/spell_checker.rb
 did_you_mean/spell_checkers/key_error_checker.rb
 did_you_mean/spell_checkers/method_name_checker.rb
 did_you_mean/spell_checkers/name_error_checkers.rb
 did_you_mean/spell_checkers/name_error_checkers/class_name_checker.rb
 did_you_mean/spell_checkers/name_error_checkers/variable_name_checker.rb
 did_you_mean/spell_checkers/null_checker.rb
 did_you_mean/spell_checkers/pattern_key_name_checker.rb
 did_you_mean/spell_checkers/require_path_checker.rb
 did_you_mean/tree_spell_checker.rb
 did_you_mean/verbose.rb
 did_you_mean/version.rb
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
 rdoc.rb
 rdoc/markdown.rb
 rdoc/parser/markdown.rb
 rdoc/parser/rd.rb
 rdoc/parser/changelog.rb
 rdoc/parser/simple.rb
 rdoc/parser/text.rb
 rdoc/parser/ruby_tools.rb
 rdoc/parser/c.rb
 rdoc/parser/ripper_state_lex.rb
 rdoc/parser/ruby.rb
 rdoc/servlet.rb
 rdoc/stats.rb
 rdoc/version.rb
 rdoc/stats/normal.rb
 rdoc/stats/verbose.rb
 rdoc/stats/quiet.rb
 rdoc/markdown/literals.rb
 rdoc/markdown/entities.rb
 rdoc/erbio.rb
 rdoc/single_class.rb
 rdoc/code_object.rb
 rdoc/rdoc.gemspec
 rdoc/rd.rb
 rdoc/store.rb
 rdoc/anon_class.rb
 rdoc/options.rb
 rdoc/erb_partial.rb
 rdoc/any_method.rb
 rdoc/meta_method.rb
 rdoc/task.rb
 rdoc/extend.rb
 rdoc/ri/store.rb
 rdoc/ri/driver.rb
 rdoc/ri/task.rb
 rdoc/ri/paths.rb
 rdoc/ri/formatter.rb
 rdoc/generator/pot.rb
 rdoc/generator/pot/po_entry.rb
 rdoc/generator/pot/po.rb
 rdoc/generator/pot/message_extractor.rb
 rdoc/generator/darkfish.rb
 rdoc/generator/markup.rb
 rdoc/generator/ri.rb
 rdoc/generator/json_index.rb
 rdoc/attr.rb
 rdoc/text.rb
 rdoc/markup/to_test.rb
 rdoc/markup/to_joined_paragraph.rb
 rdoc/markup/paragraph.rb
 rdoc/markup/list_item.rb
 rdoc/markup/to_markdown.rb
 rdoc/markup/raw.rb
 rdoc/markup/heading.rb
 rdoc/markup/rule.rb
 rdoc/markup/hard_break.rb
 rdoc/markup/attr_changer.rb
 rdoc/markup/list.rb
 rdoc/markup/to_html_crossref.rb
 rdoc/markup/regexp_handling.rb
 rdoc/markup/indented_paragraph.rb
 rdoc/markup/attribute_manager.rb
 rdoc/markup/to_bs.rb
 rdoc/markup/blank_line.rb
 rdoc/markup/verbatim.rb
 rdoc/markup/pre_process.rb
 rdoc/markup/attr_span.rb
 rdoc/markup/include.rb
 rdoc/markup/attributes.rb
 rdoc/markup/to_ansi.rb
 rdoc/markup/to_html_snippet.rb
 rdoc/markup/to_tt_only.rb
 rdoc/markup/formatter.rb
 rdoc/markup/block_quote.rb
 rdoc/markup/to_table_of_contents.rb
 rdoc/markup/to_html.rb
 rdoc/markup/to_rdoc.rb
 rdoc/markup/document.rb
 rdoc/markup/parser.rb
 rdoc/markup/table.rb
 rdoc/markup/to_label.rb
 rdoc/include.rb
 rdoc/rd/block_parser.rb
 rdoc/rd/inline.rb
 rdoc/rd/inline_parser.rb
 rdoc/rubygems_hook.rb
 rdoc/context.rb
 rdoc/generator.rb
 rdoc/tom_doc.rb
 rdoc/mixin.rb
 rdoc/class_module.rb
 rdoc/rdoc.rb
 rdoc/encoding.rb
 rdoc/i18n/locale.rb
 rdoc/i18n/text.rb
 rdoc/require.rb
 rdoc/ghost_method.rb
 rdoc/markup.rb
 rdoc/i18n.rb
 rdoc/.document
 rdoc/alias.rb
 rdoc/constant.rb
 rdoc/ri.rb
 rdoc/method_attr.rb
 rdoc/comment.rb
 rdoc/normal_class.rb
 rdoc/known_classes.rb
 rdoc/token_stream.rb
 rdoc/cross_reference.rb
 rdoc/parser.rb
 rdoc/normal_module.rb
 rdoc/top_level.rb
 rdoc/code_objects.rb
 rdoc/context/section.rb
).map {|f| "lib/" + f }

Dir.chdir("ruby") do
  system(
    file_packager,
    "../app/public/fs.data",
    "--preload", *files,
    "--js-output=../app/public/fs.js",
  exception: true)
end
