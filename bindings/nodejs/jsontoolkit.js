import wrapper from './build/wrapper.js';

// We need a global instance to preserve memory across invocations
let manager = null;
async function singleton() {
  if (!manager) {
    manager = new (await wrapper()).Wrapper();
  }

  return manager;
}

export async function compile(schema) {
  return (await singleton()).compile(JSON.stringify(schema));
}

export async function evaluate(template, instance) {
  return (await singleton()).evaluate(template, JSON.stringify(instance));
}

export async function remove(template) {
  (await singleton()).remove(template);
}
