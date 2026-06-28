const vscode = require('vscode');

function buildOverride(italicComments, boldOperators) {
  const rules = [];

  if (!italicComments) {
    rules.push({
      scope: ['comment', 'string.quoted.docstring.multi'],
      settings: { fontStyle: '' }
    });
  }

  if (!boldOperators) {
    rules.push({
      scope: ['keyword.operator'],
      settings: { fontStyle: '' }
    });
  }

  return rules.length > 0 ? { textMateRules: rules } : null;
}

function applySettings() {
  const cfg = vscode.workspace.getConfiguration('tallow');
  const italicComments = cfg.get('italicComments', true);
  const boldOperators = cfg.get('boldOperators', false);
  const override = buildOverride(italicComments, boldOperators);

  const editorCfg = vscode.workspace.getConfiguration('editor');
  const customizations = Object.assign({}, editorCfg.get('tokenColorCustomizations'));

  if (override) {
    customizations['[Tallow Dark]'] = override;
    customizations['[Tallow Light]'] = override;
  } else {
    delete customizations['[Tallow Dark]'];
    delete customizations['[Tallow Light]'];
  }

  editorCfg.update('tokenColorCustomizations', customizations, vscode.ConfigurationTarget.Global);
}

function activate(context) {
  applySettings();
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('tallow.italicComments') || e.affectsConfiguration('tallow.boldOperators')) {
        applySettings();
      }
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
